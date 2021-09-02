const textEditor = (queries) => {

  let string = '';
  let cursor = 0;
  let sel = null;
  let clipboard = '';
  const hist = [];
  let histIndex = 0;
  const results = [];

  const add = (newString) => {
    string = string.slice(0, cursor) + newString + string.slice(cursor);
    cursor += newString.length;
  }

  const del = (pos = cursor) => {
    if (pos === 0) { return ''; }
    let oldString = '';
    if (sel) {
      oldString = string.slice(sel.start, sel.end + 1);
      string = string.slice(0, sel.start) + string.slice(sel.end + 1)
      cursor = sel.start;
    } else {
      oldString = string[pos - 1];
      string = string.slice(0, pos - 1) + string.slice(pos);
      cursor--;
    }
    sel = null;
    return oldString;
  }

  const select = (start, end) => {
    start = Math.max(start, 0);
    end = Math.min(end, string.length);
    start === end ? cursor = start : sel = { start, end }
  }

  const replace = (newString = '', pos = cursor) => {
    const oldString = sel ? del(pos) : '';
    add(newString);
    select(pos, pos + newString.length - 1);
    return oldString;
  }

  const copy = () => {
    if (!sel) { return; }
    clipboard = string.slice(sel.start, sel.end + 1);
  }

  const undo = () => {
    const last = hist[histIndex - 1];
    replace(last.oldString, last.cursor);
    histIndex--;
  }
  
  const redo = () => {
    const last = hist[histIndex];
    replace(last.newString, last.cursor);
    histIndex++;
  }

  queries.forEach(query => {
    const [cmd, val, end] = query;
    let oldString = '';

    const updateString = () => {
      results.push(string);
      histIndex++;
    }

    if (cmd === 'APPEND') {
      const change = { cmd: 'replace', cursor, oldString, newString: val }
      change.oldString = sel ? replace(val) : add(val);
      updateString();
      hist.push(change);
    }
    if (cmd === 'BACKSPACE') {
      const change = { cmd: 'replace', newString: '' }
      change.cursor = sel ? sel.start : cursor - 1;
      change.oldString = del();
      updateString();
      hist.push(change);
    }
    if (cmd === 'MOVE') {
      val <= 0 ? cursor = 0 : cursor = Math.min(val, string.length);
      sel = null;
    }
    if (cmd === 'SELECT') { select(val, end); }
    if (cmd === 'CUT') {
      copy();
      oldString = del();
      updateString();
      hist.push({ cmd: 'replace', cursor, oldString, newString: '' });
    }
    if (cmd === 'COPY') { copy(); }
    if (cmd === 'PASTE') {
      if (!clipboard) { return; }
      oldString = sel ? replace(clipboard) : add(clipboard);
      updateString();
      hist.push({ cmd: 'replace', cursor, oldString, newString: clipboard });
    }
    if (cmd === 'UNDO' && histIndex > 0) {
      oldString = undo();
      results.push(string);
    }
    if (cmd === 'REDO' && histIndex < hist.length) {
      redo();
      results.push(string);
    }
  })

  return results;
};

export default textEditor;

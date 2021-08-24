const textEditor = (queries) => {

  let string = '';
  let cursor = 0;
  let sel = null;
  let clipboard = '';
  const hist = [];
  let future = [];
  const results = [];

  const append = (str, pos = cursor) => {
    if (sel) {
      backspace();
      pos = cursor;
    }
    string = string.slice(0, pos) + str + string.slice(pos);
    cursor += str.length;
    hist.push({action: 'append', str, pos});
    future = [];
  }
  const backspace = (pos = cursor) => {
    let str = '';
    if (sel) {
      str = string.slice(sel.start, sel.end);
      string = string.slice(0, sel.start) + string.slice(sel.end);
      cursor = sel.start;
      sel = null;
    } else if (cursor === 0) {
      return;
    } else {
      str = string[pos - 1];
      string = string.slice(0, pos - 1) + string.slice(pos);
      cursor--;
    }
    sel = null;
    hist.push({action: 'backspace', str, pos})
    future = [];
  }

  const move = (dis) => {
    if (dis < 0) { cursor = Math.max(dis, 0); }
    if (dis > 0) { cursor = Math.min(dis, string.length); }
    sel = null;
  }
  const select = (start, end) => {
    start = Math.max(start, 0);
    end = Math.min(end, string.length);
    if (start === end) {
      cursor = start;
    } else {
      sel = {start, end};
    }
  }
  const copy = () => {
    if (!sel) { return; }
    clipboard = string.slice(sel.start, sel.end);
  }
  const paste = () => {
    if (!clipboard) {return;}
    append(clipboard);
  }
  const undo = () => {
    if (hist.length === 0) { return; }
    const last = hist.pop();
    future.push(last);
    if (last.action === 'append') {
      string = string.slice(0, last.pos) + string.slice(last.pos + last.str.length);
      cursor = last.pos;
    } else if (last.action === 'backspace') {
      string = string.slice(0, last.pos) + last.str + string.slice(last.pos + last.str.length);
      cursor = last.pos;
    }
  }
  const redo = () => {
    if (future.length === 0) { return; }
    const last = future.pop();
    if (last.action === 'append') {
      append(last.str, last.pos);
    } else if (last.action === 'backspace') {
      select(last.pos = last.str.length, last.pos);
      backspace();
    }
  }

  queries.forEach(query => {
    let cmd = query[0];
    let val = query[1];

    if (cmd === 'APPEND') { append(val); }
    if (cmd === 'BACKSPACE') { backspace(); }
    if (cmd === 'MOVE') { move(Number(val)); }
    if (cmd === 'SELECT') { select(query[1], query[2]); }
    if (cmd === 'COPY') { copy(); }
    if (cmd === 'PASTE') { paste(); }
    if (cmd === 'UNDO') { undo(); }
    if (cmd === 'REDO') { redo(); }

    if (cmd === 'APPEND' ||
        cmd === 'BACKSPACE' ||
        cmd === 'PASTE' ||
        cmd === 'UNDO' ||
        cmd === 'REDO'
    ) { results.push(string); }
  })

  return results;
};

export default textEditor;

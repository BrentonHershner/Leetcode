// from Hack Reactor Toy Problems
/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  for (var i = 0; i < result.storageLimit; i++) {
    result.storage.push([]);
  }

  result.getStorageLimit = function() {
    return storageLimit;
  }

  result.getSize = function() {
    return size;
  }

  var isKeyOk = function(key) {
    if (key === 0 || key === false) { return true; }
    if (!key) { return false; }
  }

  result.insert = function(key, value) {
    if (!isKeyOk(key)) {return undefined;}
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    storage[hashedKey] = storage[hashedKey] || [];

    for (var i = 0; i < storage[hashedKey].length; i++) {
      if (storage[hashedKey][i][0] === key) {
        storage[hashedKey][i][1] = value;
        return;
      }
    }
    if (i === storage[hashedKey].length) {
      storage[hashedKey].push([key, value]);
      size++;

      if (storage[hashedKey].length > storageLimit * 0.75) {
        result.resize('increase');
      }
    }
  }

  result.retrieve = function(key) {
    if (!isKeyOk(key)) { return undefined; }
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    storage[hashedKey] = storage[hashedKey] || [];
    for (var i = 0; i < storage[hashedKey].length; i++) {
      if (storage[hashedKey][i][0] === key) { return storage[hashedKey][i][1]; }
    }
    return undefined;
  };

  result.remove = function(key) {
    if (!isKeyOk(key)) { return undefined; }
      var hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    storage[hashedKey] = storage[hashedKey] || [];
    for (var i = 0; i < storage[hashedKey].length; i++) {
      if (storage[hashedKey][i][0] === key) {
        storage[hashedKey].splice(i, 1);
        size--;
        if (storage[hashedKey].length < storageLimit * 0.25) {
          result.resize('decrease');
        }
      }
    }

  };

  result.resize = function(direction) {
    if (direction === 'increase') { storageLimit *= 2; }
    if (direction === 'decrease') { storageLimit /= 2; }
    var tempStorage = [];
    var newStorage = [];

    for (var i = 0; i < storageLimit; i++) {
      for (var j = 0; j < storage[i]; j++) {
        var key = storage[i][j][0];
        var val = storage[i][j][1];
        tempStorage.push([key, val]);
        result.remove(key);
      }
    }
    for (var i = 0; i < tempStorage.length; i++) {
      var key = tempStorage[i][0];
      var val = tempStorage[i][1];
      result.insert(key, val);
    }
  };

  return result;
};

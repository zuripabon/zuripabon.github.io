mergeInto(LibraryManager.library, {

  onHoverIn: function (id) {
    window.onGameObjectHover(UTF8ToString(id), true);
  },

  onHoverOut: function (id) {
    window.onGameObjectHover(UTF8ToString(id), false);
  },

  onClick: function (id) {
    window.onGameObjectClick(UTF8ToString(id));
  }

});
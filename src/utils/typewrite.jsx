(function($) {
  $.fn.typewrite = function(options) {
    var settings = $.extend(
      {
        speed: 12,
        blinkSpeed: 2,
        showCursor: true,
        blinkingCursor: true,
        cursor: "|",
        selectedBackground: '#F1F1F1',
        selectedText: '#333333',
        continuous: false,
      },
      options
    );
    settings.blinkSpeed = 1e3 / settings.blinkSpeed;
    if (settings.showCursor) {
      $(this).html(
        '<span></span><span class="blinkingCursor">' +
          settings.cursor +
          "</span>"
      );
      if (settings.blinkingCursor) {
        var $cursor = $(".blinkingCursor");
        setInterval(function() {
          if (settings.blinkingCursor === "opacity") {
            if ($cursor.css("opacity") === "1") {
              $cursor.css({ opacity: 0 });
            } else {
              $cursor.css({ opacity: 1 });
            }
          } else {
            $cursor.toggle();
          }
        }, settings.blinkSpeed);
      }
    } else {
      $(this).html("<span></span>");
    }
    settings.mainEl = this;
    settings.el = $(this).children("span")[0];
    settings.speed = 1e3 / settings.speed;
    var actions = options.actions;
    settings.queue = actions.length;
    $(settings.mainEl).trigger("typewriteStarted");
    processActions();
    function processActions() {
      actions.forEach(function(element, index) {
        if (Object.keys(element).includes("speed")) {
          settings.speed = 1e3 / element.speed;
        }
        if (!Object.keys(element).includes("speed")) {
          removeSelection();
        }
        if (Object.keys(element).includes("delay")) {
          delay(element.delay);
        }
        if (Object.keys(element).includes("remove")) {
          remove(element.remove);
        }
        if (Object.keys(element).includes("select")) {
          select(element.select);
        }
        if (Object.keys(element).includes("type")) {
          if (element.type === "<br>") {
            newLine();
          } else {
            var text = $("<div/>")
              .html(element.type)
              .text();
            typeText(text, settings);
          }
        }
      });
    }
    var done = setInterval(function() {
      if (settings.queue === 0) {
        clearInterval(done);
        $(settings.mainEl).trigger("typewriteComplete");
        if (settings.continuous) {
          $(settings.el).empty();
          processActions();
        }
      }
    }, 500);
    function select(action, callback) {
      var charLen = action.to - action.from;
      var spanOpen =
        '<span class="typewriteSelected" style="background-color:' +
        settings.selectedBackground +
        "; color: " +
        settings.selectedText +
        '">';
      var blankstr = new Array(charLen + 1).join(" ");
      var chars = blankstr.split("");
      chars.forEach(function(char, index) {
        $(settings.el)
          .delay(settings.speed)
          .queue(function(next) {
            var newIndex = index + 1;
            var newTo = action.to - newIndex;
            $(settings.el).html(
              $(settings.el)
                .html()
                .replace(/<br.*?>/g, " \n ")
            );
            var currentString = $(settings.el).text();
            var firstPart = currentString.slice(0, newTo);
            var selectPart = currentString.slice(newTo, action.to);
            var lastPart = currentString.slice(action.to, currentString.length);
            var newString =
              firstPart + spanOpen + selectPart + "</span>" + lastPart;
            $(this).html(newString.replace(/ \n /g, "<br>"));
            next();
            if (index === chars.length - 1) {
              settings.queue = settings.queue - 1;
              $(settings.mainEl).trigger("typewriteSelected", action);
            }
          });
      });
    }
    function delay(time) {
      $(settings.el)
        .delay(time)
        .queue(function(next) {
          next();
          settings.queue = settings.queue - 1;
          $(settings.mainEl).trigger("typewriteDelayEnded");
        });
    }
    function remove(remove) {
      var blankstr = new Array(remove.num + 1).join(" ");
      var chars = blankstr.split("");
      var removeType =
        typeof remove.type !== "undefined" ? remove.type : "stepped";
      if (removeType !== "stepped" && removeType !== "whole") {
        removeType = "stepped";
      }
      if (removeType === "stepped") {
        chars.forEach(function(char, index) {
          $(settings.el)
            .delay(settings.speed)
            .queue(function(next) {
              $(settings.el).html(
                $(settings.el)
                  .html()
                  .replace(/<br.*?>/g, " \n ")
              );
              var currText = $(this)
                .text()
                .substring(0, $(this).text().length - 1);
              $(this).html(currText.replace(/ \n /g, "<br>"));
              next();
              if (index === chars.length - 1) {
                settings.queue = settings.queue - 1;
                $(settings.mainEl).trigger("typewriteRemoved", remove);
              }
            });
        }, this);
      }
      if (removeType === "whole") {
        $(settings.el)
          .delay(settings.speed)
          .queue(function(next) {
            $(settings.el).html(
              $(settings.el)
                .html()
                .replace(/<br.*?>/g, " \n ")
            );
            var currText = $(this)
              .text()
              .substring(0, $(this).text().length - remove.num);
            $(this).html(currText.replace(/ \n /g, "<br>"));
            next();
            settings.queue = settings.queue - 1;
            $(settings.mainEl).trigger("typewriteRemoved", remove);
          });
      }
    }
    function typeText(text) {
      var chars = text.split("");
      chars.forEach(function(char, index) {
        $(settings.el)
          .delay(settings.speed)
          .queue(function(next) {
            var text = $(this).html() + char;
            $(this).html(text);
            next();
            if (index === chars.length - 1) {
              settings.queue = settings.queue - 1;
              $(settings.mainEl).trigger("typewriteTyped", text);
            }
          });
      }, this);
    }
    function newLine() {
      $(settings.el)
        .delay(settings.speed)
        .queue(function(next) {
          var currTextNoCurr = $(this)
            .html()
            .substring(0, $(this).html().length);
          $(this).html(currTextNoCurr + "<br>");
          next();
          settings.queue = settings.queue - 1;
          $(settings.mainEl).trigger("typewriteNewLine");
        });
    }
    function removeSelection() {
      if ($(".typewriteSelected").length > 0) {
        var selectionText = $(".typewriteSelected").text();
        $(".typewriteSelected").replaceWith(selectionText);
      }
    }
  };
})(jQuery);

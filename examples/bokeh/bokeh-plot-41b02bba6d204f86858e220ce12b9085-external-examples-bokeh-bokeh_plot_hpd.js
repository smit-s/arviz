(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("6aa0cb6a-f7bf-4a43-aae0-339a4f5675b9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6aa0cb6a-f7bf-4a43-aae0-339a4f5675b9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"497dff2c-5129-46e3-80f0-869a731ac320":{"roots":{"references":[{"attributes":{"below":[{"id":"56035","type":"LinearAxis"}],"center":[{"id":"56039","type":"Grid"},{"id":"56044","type":"Grid"}],"left":[{"id":"56040","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"56065","type":"GlyphRenderer"},{"id":"56070","type":"GlyphRenderer"}],"title":{"id":"56073","type":"Title"},"toolbar":{"id":"56053","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"56027","type":"DataRange1d"},"x_scale":{"id":"56031","type":"LinearScale"},"y_range":{"id":"56029","type":"DataRange1d"},"y_scale":{"id":"56033","type":"LinearScale"}},"id":"56026","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"56029","type":"DataRange1d"},{"attributes":{},"id":"56036","type":"BasicTicker"},{"attributes":{"overlay":{"id":"56078","type":"BoxAnnotation"}},"id":"56047","type":"BoxZoomTool"},{"attributes":{},"id":"56080","type":"Selection"},{"attributes":{"data_source":{"id":"56062","type":"ColumnDataSource"},"glyph":{"id":"56063","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56064","type":"Patch"},"selection_glyph":null,"view":{"id":"56066","type":"CDSView"}},"id":"56065","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"56077","type":"BasicTickFormatter"},"ticker":{"id":"56036","type":"BasicTicker"}},"id":"56035","type":"LinearAxis"},{"attributes":{},"id":"56031","type":"LinearScale"},{"attributes":{"source":{"id":"56067","type":"ColumnDataSource"}},"id":"56071","type":"CDSView"},{"attributes":{},"id":"56083","type":"UnionRenderers"},{"attributes":{},"id":"56041","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56045","type":"ResetTool"},{"id":"56046","type":"PanTool"},{"id":"56047","type":"BoxZoomTool"},{"id":"56048","type":"WheelZoomTool"},{"id":"56049","type":"LassoSelectTool"},{"id":"56050","type":"UndoTool"},{"id":"56051","type":"SaveTool"},{"id":"56052","type":"HoverTool"}]},"id":"56053","type":"Toolbar"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56064","type":"Patch"},{"attributes":{"dimension":1,"ticker":{"id":"56041","type":"BasicTicker"}},"id":"56044","type":"Grid"},{"attributes":{},"id":"56033","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"56079","type":"PolyAnnotation"}},"id":"56049","type":"LassoSelectTool"},{"attributes":{},"id":"56081","type":"UnionRenderers"},{"attributes":{},"id":"56082","type":"Selection"},{"attributes":{"ticker":{"id":"56036","type":"BasicTicker"}},"id":"56039","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"56080","type":"Selection"},"selection_policy":{"id":"56081","type":"UnionRenderers"}},"id":"56062","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"56067","type":"ColumnDataSource"},"glyph":{"id":"56068","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56069","type":"Line"},"selection_glyph":null,"view":{"id":"56071","type":"CDSView"}},"id":"56070","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"56073","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56079","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"JroDLt1BAsDr9MP0/ED8v4B1mWXov/q/72eMSrae+r9UP949A3r6v7JtzjzIVvq/L5F9HN9O+r+tp56ARh36vwPrw6l6v/m/1qy86vmJ+b834+wWeHv3v4MwQn/W4/W/H9v4Zc9s9b8aaHwYkUn1v0+xj0+i/PS/sDVR0oTb9L81N84bv9j0v+ymtNVi1fS/Nxm5vVfD9L+/BHPHgJLzv41QIXsQqfK/XkVuQ7Io8b/VpL0tFgfwvxk3uTLdZu6/SE6BhKvb5798w7x3Z2bkv18rsov6Y+S/ZiPfJm78478Zy2baYs7jv17pK9vksuK/Haoy9bPX4b/JbyOWEeTfv83fhb+vzd+/CKGjxRy73r9OdU6GsKTdv6bXgbosQNy/UX9pk87c2b8yzXM5Qj3Yv9aSthkWd9O/hfysiaof07+QI2FumNvSv5WnvumMFdK/AmIVqmLK0b8Aqnv+vGbQvws4Ln5WnM6/Sj23w+Kmzb/5GDHKXpfMvzj3YOWtLcm/VyE+8b5YyL8wMNFFhSfHvxgVjQQKT7i/MI4SGyzgsr+WIAYn/ACtv6caAMvZU3y/G5/nKHTPmD+Pt70Vda+oP2IzwGwdhbA/auvd5n9Isj+229RcYmWzP3u0A9rXvcA/Y6iJR9XMwT/3/GH5Lg7JPzS+eLryYco/XxDJzEEdzT/UiwoXeGXQP0T+grYaCtE/TldCTGqa0j+wBnBiRPHSPx1dQuMwaNQ/X62+IcCR1T+kWrHOkK3VP9nVN+LWmdw/FIgs5x2V3T+uU0kLEZndP+tlKKfkxt0/pitu7sRY4T//YDUAU7fjP9d53iS0seQ/6CFHa6dF5T8sbaXv5U/mPyQWJChN9Oc/kr0kqvDb6j/fZ/nFcAHwP+WMD1vXDPA/HWex+jCh8D+8sn78xPrwP2eIqufK+vE/tafCsAN48z/OqJf1AZjzP0GDuWCGmPM/SkTThX6x8z8XNoN9wcDzP/H1njEDS/Q/ilQg9Ljk9D+jFhj84ff0P7+QNxQp2/g/0SqOx64R/j9ohrWmvKv+P0SHNG1jrwFAOvqbbThxCEA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"tIv4o0V86z+KBZ6Fgd/xP0BFM80LoPI/CMy52qSw8j9W4BBh/sLyPyfJmOGb1PI/aDfBcZDY8j8qrLC/XPHyP34KHqtCIPM/lamhCgM78z9kjon0Q0L0P77nXsAUDvU/cJIDTZhJ9T/zy8FzN1v1P1gnONiugfU/KGXXlj2S9T9m5BhyoJP1P4qsJZVOlfU/ZHMjIVSe9T+gfUacvzb2P7pXb8J3q/Y/Ud1I3qZr9z+WLSHpdPz3PzqyUbNIZvg/bqzfHhUJ+j8hzxAiZub6Pyh1E10B5/o/JjdIduQA+z86TWZJZwz7P6gFNclGU/s/eVWzAhOK+z8HkjvNfQP8PwZEDwhKBvw/34tLZ5wo/D9WMTbvaUv8PwvFr2j6d/w/FtCSLWbE/D9ahtG4V/j8P6UtyTwdkf0/b2DKrgqc/T+O2zPyjKT9Pw0ryGJOvf0/wFO9qrPG/T/AijBgKPP9P38cHZg6Fv4/K4zE05El/j9w7lwTijb+P4zwqSElbf4/6x3sEHR6/j/97KKrh43+P1eX26+HPf8/jmsnn/5o/z9+52MP/Iv/P/N/GhPW8f8/n+codM8YAEBveyvqXjEAQM4As3UUQgBArneb/yFJAEBvU3OJlU0AQKQd0L7uhQBAQ008qmaOAEDoD8t3ccgAQPLF05UP0wBAg0hmDuroAEC9qHCBVwYBQOQvaKuhEAFAdSXEpKYpAUBrACdGFC8BQNIlNA6DRgFA1uobAhxZAUCqFesM2VoBQF59I26dyQFAgchy3lHZAUA7lbQQkdkBQF+Gckpu3AFAdcXNnRgrAkAgrAZg6nYCQDvPm4Q2lgJAPeRo7bSoAkCmrfS9/MkCQMSCBKWJ/gJAspdEFX5bA0D4WX4xXAAEQDnjw9Y1AwRAx1msPkwoBECvrB8/sT4EQBqi6rmyfgRA7akw7ADeBEA06mV9AOYEQNBgLpgh5gRAEtF0oV/sBECGzWBfMPAEQHy9Z8zAEgVAIhUIPS45BUCpBQZ/+D0FQDDkDUXKNgZAtIrjsWuEB0CaYa0p76oHQKJDmrax1whAHf3NNpw4DEA=","dtype":"float64","shape":[100]}},"selected":{"id":"56082","type":"Selection"},"selection_policy":{"id":"56083","type":"UnionRenderers"}},"id":"56067","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"56075","type":"BasicTickFormatter"},"ticker":{"id":"56041","type":"BasicTicker"}},"id":"56040","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"56063","type":"Patch"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"56069","type":"Line"},{"attributes":{},"id":"56045","type":"ResetTool"},{"attributes":{},"id":"56075","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"56052","type":"HoverTool"},{"attributes":{},"id":"56077","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56078","type":"BoxAnnotation"},{"attributes":{},"id":"56051","type":"SaveTool"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"56068","type":"Line"},{"attributes":{},"id":"56050","type":"UndoTool"},{"attributes":{},"id":"56048","type":"WheelZoomTool"},{"attributes":{"source":{"id":"56062","type":"ColumnDataSource"}},"id":"56066","type":"CDSView"},{"attributes":{},"id":"56046","type":"PanTool"},{"attributes":{"callback":null},"id":"56027","type":"DataRange1d"}],"root_ids":["56026"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"497dff2c-5129-46e3-80f0-869a731ac320","roots":{"56026":"6aa0cb6a-f7bf-4a43-aae0-339a4f5675b9"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
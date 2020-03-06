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
      };var element = document.getElementById("76ed3832-b580-4a7d-be05-1ce06c8f678f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '76ed3832-b580-4a7d-be05-1ce06c8f678f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f3cb320c-fefb-4dc8-a6e9-bd6be23fdf48":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"54742","type":"PolyAnnotation"}},"id":"54717","type":"LassoSelectTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"54734","type":"Title"},{"attributes":{"callback":null},"id":"54697","type":"DataRange1d"},{"attributes":{},"id":"54719","type":"SaveTool"},{"attributes":{"children":[[{"id":"54694","subtype":"Figure","type":"Plot"},0,0]]},"id":"54746","type":"GridBox"},{"attributes":{},"id":"54699","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"54713","type":"ResetTool"},{"id":"54714","type":"PanTool"},{"id":"54715","type":"BoxZoomTool"},{"id":"54716","type":"WheelZoomTool"},{"id":"54717","type":"LassoSelectTool"},{"id":"54718","type":"UndoTool"},{"id":"54719","type":"SaveTool"},{"id":"54720","type":"HoverTool"}]},"id":"54721","type":"Toolbar"},{"attributes":{"formatter":{"id":"54740","type":"BasicTickFormatter"},"ticker":{"id":"54704","type":"BasicTicker"}},"id":"54703","type":"LinearAxis"},{"attributes":{},"id":"54704","type":"BasicTicker"},{"attributes":{"tools":[{"id":"54713","type":"ResetTool"},{"id":"54714","type":"PanTool"},{"id":"54715","type":"BoxZoomTool"},{"id":"54716","type":"WheelZoomTool"},{"id":"54717","type":"LassoSelectTool"},{"id":"54718","type":"UndoTool"},{"id":"54719","type":"SaveTool"},{"id":"54720","type":"HoverTool"}]},"id":"54747","type":"ProxyToolbar"},{"attributes":{},"id":"54740","type":"BasicTickFormatter"},{"attributes":{},"id":"54738","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"54748","type":"ToolbarBox"},{"id":"54746","type":"GridBox"}]},"id":"54749","type":"Column"},{"attributes":{"data_source":{"id":"54731","type":"ColumnDataSource"},"glyph":{"id":"54730","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"54733","type":"CDSView"}},"id":"54732","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"54742","type":"PolyAnnotation"},{"attributes":{"source":{"id":"54731","type":"ColumnDataSource"}},"id":"54733","type":"CDSView"},{"attributes":{},"id":"54718","type":"UndoTool"},{"attributes":{},"id":"54713","type":"ResetTool"},{"attributes":{},"id":"54714","type":"PanTool"},{"attributes":{},"id":"54743","type":"Selection"},{"attributes":{"toolbar":{"id":"54747","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"54748","type":"ToolbarBox"},{"attributes":{},"id":"54716","type":"WheelZoomTool"},{"attributes":{"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"54730","type":"Cross"},{"attributes":{"callback":null},"id":"54720","type":"HoverTool"},{"attributes":{"dimension":1,"ticker":{"id":"54709","type":"BasicTicker"}},"id":"54712","type":"Grid"},{"attributes":{},"id":"54709","type":"BasicTicker"},{"attributes":{},"id":"54744","type":"UnionRenderers"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"54738","type":"BasicTickFormatter"},"ticker":{"id":"54709","type":"BasicTicker"}},"id":"54708","type":"LinearAxis"},{"attributes":{"below":[{"id":"54703","type":"LinearAxis"}],"center":[{"id":"54707","type":"Grid"},{"id":"54712","type":"Grid"}],"left":[{"id":"54708","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"54732","type":"GlyphRenderer"}],"title":{"id":"54734","type":"Title"},"toolbar":{"id":"54721","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"54695","type":"DataRange1d"},"x_scale":{"id":"54699","type":"LinearScale"},"y_range":{"id":"54697","type":"DataRange1d"},"y_scale":{"id":"54701","type":"LinearScale"}},"id":"54694","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","shape":[8]}},"selected":{"id":"54743","type":"Selection"},"selection_policy":{"id":"54744","type":"UnionRenderers"}},"id":"54731","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"54704","type":"BasicTicker"}},"id":"54707","type":"Grid"},{"attributes":{"overlay":{"id":"54741","type":"BoxAnnotation"}},"id":"54715","type":"BoxZoomTool"},{"attributes":{},"id":"54701","type":"LinearScale"},{"attributes":{"callback":null},"id":"54695","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54741","type":"BoxAnnotation"}],"root_ids":["54749"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"f3cb320c-fefb-4dc8-a6e9-bd6be23fdf48","roots":{"54749":"76ed3832-b580-4a7d-be05-1ce06c8f678f"}}];
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
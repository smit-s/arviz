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
      };var element = document.getElementById("a3ebcc22-f11e-41c8-bb02-20164690ccda");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a3ebcc22-f11e-41c8-bb02-20164690ccda' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8bf5b1d3-471b-4ff3-8bb6-90890a9bcb6b":{"roots":{"references":[{"attributes":{"below":[{"id":"80112","type":"LinearAxis"}],"center":[{"id":"80116","type":"Grid"},{"id":"80121","type":"Grid"}],"left":[{"id":"80117","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"80141","type":"GlyphRenderer"}],"title":{"id":"80143","type":"Title"},"toolbar":{"id":"80130","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"80104","type":"DataRange1d"},"x_scale":{"id":"80108","type":"LinearScale"},"y_range":{"id":"80106","type":"DataRange1d"},"y_scale":{"id":"80110","type":"LinearScale"}},"id":"80103","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"80152","type":"Selection"},{"attributes":{},"id":"80125","type":"WheelZoomTool"},{"attributes":{},"id":"80153","type":"UnionRenderers"},{"attributes":{},"id":"80147","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"80118","type":"BasicTicker"}},"id":"80121","type":"Grid"},{"attributes":{"callback":null},"id":"80104","type":"DataRange1d"},{"attributes":{"data_source":{"id":"80140","type":"ColumnDataSource"},"glyph":{"id":"80139","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"80142","type":"CDSView"}},"id":"80141","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"80122","type":"ResetTool"},{"id":"80123","type":"PanTool"},{"id":"80124","type":"BoxZoomTool"},{"id":"80125","type":"WheelZoomTool"},{"id":"80126","type":"LassoSelectTool"},{"id":"80127","type":"UndoTool"},{"id":"80128","type":"SaveTool"},{"id":"80129","type":"HoverTool"}]},"id":"80130","type":"Toolbar"},{"attributes":{"ticker":{"id":"80113","type":"BasicTicker"}},"id":"80116","type":"Grid"},{"attributes":{"text":"centered model - non centered model"},"id":"80143","type":"Title"},{"attributes":{},"id":"80128","type":"SaveTool"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","shape":[8]}},"selected":{"id":"80152","type":"Selection"},"selection_policy":{"id":"80153","type":"UnionRenderers"}},"id":"80140","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"80150","type":"BoxAnnotation"}},"id":"80124","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"80129","type":"HoverTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"80147","type":"BasicTickFormatter"},"ticker":{"id":"80118","type":"BasicTicker"}},"id":"80117","type":"LinearAxis"},{"attributes":{"source":{"id":"80140","type":"ColumnDataSource"}},"id":"80142","type":"CDSView"},{"attributes":{},"id":"80127","type":"UndoTool"},{"attributes":{"formatter":{"id":"80149","type":"BasicTickFormatter"},"ticker":{"id":"80113","type":"BasicTicker"}},"id":"80112","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"80151","type":"PolyAnnotation"}},"id":"80126","type":"LassoSelectTool"},{"attributes":{},"id":"80149","type":"BasicTickFormatter"},{"attributes":{},"id":"80118","type":"BasicTicker"},{"attributes":{},"id":"80108","type":"LinearScale"},{"attributes":{},"id":"80123","type":"PanTool"},{"attributes":{"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"80139","type":"Cross"},{"attributes":{"children":[{"id":"80157","type":"ToolbarBox"},{"id":"80155","type":"GridBox"}]},"id":"80158","type":"Column"},{"attributes":{"children":[[{"id":"80103","subtype":"Figure","type":"Plot"},0,0]]},"id":"80155","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80150","type":"BoxAnnotation"},{"attributes":{},"id":"80113","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"80151","type":"PolyAnnotation"},{"attributes":{},"id":"80122","type":"ResetTool"},{"attributes":{"tools":[{"id":"80122","type":"ResetTool"},{"id":"80123","type":"PanTool"},{"id":"80124","type":"BoxZoomTool"},{"id":"80125","type":"WheelZoomTool"},{"id":"80126","type":"LassoSelectTool"},{"id":"80127","type":"UndoTool"},{"id":"80128","type":"SaveTool"},{"id":"80129","type":"HoverTool"}]},"id":"80156","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"80106","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"80156","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"80157","type":"ToolbarBox"},{"attributes":{},"id":"80110","type":"LinearScale"}],"root_ids":["80158"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"8bf5b1d3-471b-4ff3-8bb6-90890a9bcb6b","roots":{"80158":"a3ebcc22-f11e-41c8-bb02-20164690ccda"}}];
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
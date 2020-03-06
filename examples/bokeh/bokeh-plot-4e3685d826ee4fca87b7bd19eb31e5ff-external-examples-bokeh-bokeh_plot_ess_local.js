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
      };var element = document.getElementById("b19bd16f-8d2e-42ce-a62c-e66eb92b8100");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b19bd16f-8d2e-42ce-a62c-e66eb92b8100' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"43285a93-3a54-42ee-bd0d-48b607f27329":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"55173","type":"BoxAnnotation"},{"attributes":{},"id":"55134","type":"BasicTicker"},{"attributes":{},"id":"55139","type":"PanTool"},{"attributes":{},"id":"55176","type":"UnionRenderers"},{"attributes":{},"id":"55175","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"55138","type":"ResetTool"},{"id":"55139","type":"PanTool"},{"id":"55140","type":"BoxZoomTool"},{"id":"55141","type":"WheelZoomTool"},{"id":"55142","type":"LassoSelectTool"},{"id":"55143","type":"UndoTool"},{"id":"55144","type":"SaveTool"},{"id":"55145","type":"HoverTool"}]},"id":"55146","type":"Toolbar"},{"attributes":{"callback":null},"id":"55145","type":"HoverTool"},{"attributes":{"data_source":{"id":"55161","type":"ColumnDataSource"},"glyph":{"id":"55160","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"55163","type":"CDSView"}},"id":"55162","type":"GlyphRenderer"},{"attributes":{},"id":"55141","type":"WheelZoomTool"},{"attributes":{},"id":"55143","type":"UndoTool"},{"attributes":{"source":{"id":"55161","type":"ColumnDataSource"}},"id":"55163","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"55164","type":"Span"},{"attributes":{"callback":null},"id":"55122","type":"DataRange1d"},{"attributes":{"text":"mu"},"id":"55166","type":"Title"},{"attributes":{"data_source":{"id":"55155","type":"ColumnDataSource"},"glyph":{"id":"55156","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55157","type":"Circle"},"selection_glyph":null,"view":{"id":"55159","type":"CDSView"}},"id":"55158","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"55129","type":"BasicTicker"}},"id":"55132","type":"Grid"},{"attributes":{},"id":"55178","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"55173","type":"BoxAnnotation"}},"id":"55140","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"55182","type":"ToolbarBox"},{"id":"55180","type":"GridBox"}]},"id":"55183","type":"Column"},{"attributes":{"tools":[{"id":"55138","type":"ResetTool"},{"id":"55139","type":"PanTool"},{"id":"55140","type":"BoxZoomTool"},{"id":"55141","type":"WheelZoomTool"},{"id":"55142","type":"LassoSelectTool"},{"id":"55143","type":"UndoTool"},{"id":"55144","type":"SaveTool"},{"id":"55145","type":"HoverTool"}]},"id":"55181","type":"ProxyToolbar"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","shape":[20]}},"selected":{"id":"55175","type":"Selection"},"selection_policy":{"id":"55176","type":"UnionRenderers"}},"id":"55155","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"55181","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"55182","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"55174","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","shape":[2]}},"selected":{"id":"55177","type":"Selection"},"selection_policy":{"id":"55178","type":"UnionRenderers"}},"id":"55161","type":"ColumnDataSource"},{"attributes":{},"id":"55170","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"55157","type":"Circle"},{"attributes":{},"id":"55138","type":"ResetTool"},{"attributes":{"callback":null},"id":"55120","type":"DataRange1d"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"55170","type":"BasicTickFormatter"},"ticker":{"id":"55134","type":"BasicTicker"}},"id":"55133","type":"LinearAxis"},{"attributes":{},"id":"55177","type":"Selection"},{"attributes":{},"id":"55144","type":"SaveTool"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"55165","type":"Span"},{"attributes":{"below":[{"id":"55128","type":"LinearAxis"}],"center":[{"id":"55132","type":"Grid"},{"id":"55137","type":"Grid"}],"left":[{"id":"55133","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"55158","type":"GlyphRenderer"},{"id":"55162","type":"GlyphRenderer"},{"id":"55164","type":"Span"},{"id":"55165","type":"Span"}],"title":{"id":"55166","type":"Title"},"toolbar":{"id":"55146","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"55120","type":"DataRange1d"},"x_scale":{"id":"55124","type":"LinearScale"},"y_range":{"id":"55122","type":"DataRange1d"},"y_scale":{"id":"55126","type":"LinearScale"}},"id":"55119","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"55124","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"55172","type":"BasicTickFormatter"},"ticker":{"id":"55129","type":"BasicTicker"}},"id":"55128","type":"LinearAxis"},{"attributes":{"source":{"id":"55155","type":"ColumnDataSource"}},"id":"55159","type":"CDSView"},{"attributes":{},"id":"55129","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"55156","type":"Circle"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"55160","type":"Dash"},{"attributes":{},"id":"55172","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"55134","type":"BasicTicker"}},"id":"55137","type":"Grid"},{"attributes":{"children":[[{"id":"55119","subtype":"Figure","type":"Plot"},0,0]]},"id":"55180","type":"GridBox"},{"attributes":{"callback":null,"overlay":{"id":"55174","type":"PolyAnnotation"}},"id":"55142","type":"LassoSelectTool"},{"attributes":{},"id":"55126","type":"LinearScale"}],"root_ids":["55183"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"43285a93-3a54-42ee-bd0d-48b607f27329","roots":{"55183":"b19bd16f-8d2e-42ce-a62c-e66eb92b8100"}}];
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
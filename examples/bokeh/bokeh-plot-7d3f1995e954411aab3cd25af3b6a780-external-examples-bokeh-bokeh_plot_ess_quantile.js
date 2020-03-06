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
      };var element = document.getElementById("2fcaa184-49a8-4c05-9082-24056ce00ded");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2fcaa184-49a8-4c05-9082-24056ce00ded' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"58e4d81a-ce04-44f9-9919-2b8e9d04dba7":{"roots":{"references":[{"attributes":{},"id":"55245","type":"LinearScale"},{"attributes":{},"id":"55291","type":"Selection"},{"attributes":{"callback":null},"id":"55241","type":"DataRange1d"},{"attributes":{},"id":"55265","type":"SaveTool"},{"attributes":{"toolbar":{"id":"55295","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"55296","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"55276","type":"ColumnDataSource"},"glyph":{"id":"55277","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55278","type":"Circle"},"selection_glyph":null,"view":{"id":"55280","type":"CDSView"}},"id":"55279","type":"GlyphRenderer"},{"attributes":{},"id":"55288","type":"BasicTickFormatter"},{"attributes":{},"id":"55250","type":"BasicTicker"},{"attributes":{"children":[{"id":"55296","type":"ToolbarBox"},{"id":"55294","type":"GridBox"}]},"id":"55297","type":"Column"},{"attributes":{"text":"sigma_y"},"id":"55282","type":"Title"},{"attributes":{"callback":null},"id":"55266","type":"HoverTool"},{"attributes":{"tools":[{"id":"55259","type":"ResetTool"},{"id":"55260","type":"PanTool"},{"id":"55261","type":"BoxZoomTool"},{"id":"55262","type":"WheelZoomTool"},{"id":"55263","type":"LassoSelectTool"},{"id":"55264","type":"UndoTool"},{"id":"55265","type":"SaveTool"},{"id":"55266","type":"HoverTool"}]},"id":"55295","type":"ProxyToolbar"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AmD6jcFOjEBQTl2raYiTQBDjz+4U2pNAZGseedHplEB/WvEazoSWQOHtizqLkJlAAkPUheO2mUBesx6n5kCZQLJxAzcYzZhAMUpMiFv0mUC/Oi/BFYGZQN5lChPFDZZAFw600+IXlUB7koIfjHaVQLrzDUmEzZRA0nSsVmc2lUBXi/wUTAaRQBZhtQ+zqpBAXkjEt6PHjECNgYxaPa6QQA==","dtype":"float64","shape":[20]}},"selected":{"id":"55291","type":"Selection"},"selection_policy":{"id":"55292","type":"UnionRenderers"}},"id":"55276","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"55289","type":"BoxAnnotation"}},"id":"55261","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"55277","type":"Circle"},{"attributes":{},"id":"55260","type":"PanTool"},{"attributes":{},"id":"55247","type":"LinearScale"},{"attributes":{"children":[[{"id":"55240","subtype":"Figure","type":"Plot"},0,0]]},"id":"55294","type":"GridBox"},{"attributes":{},"id":"55292","type":"UnionRenderers"},{"attributes":{},"id":"55262","type":"WheelZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"55288","type":"BasicTickFormatter"},"ticker":{"id":"55250","type":"BasicTicker"}},"id":"55249","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"55289","type":"BoxAnnotation"},{"attributes":{},"id":"55255","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"55278","type":"Circle"},{"attributes":{},"id":"55259","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"55255","type":"BasicTicker"}},"id":"55258","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"55259","type":"ResetTool"},{"id":"55260","type":"PanTool"},{"id":"55261","type":"BoxZoomTool"},{"id":"55262","type":"WheelZoomTool"},{"id":"55263","type":"LassoSelectTool"},{"id":"55264","type":"UndoTool"},{"id":"55265","type":"SaveTool"},{"id":"55266","type":"HoverTool"}]},"id":"55267","type":"Toolbar"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"55286","type":"BasicTickFormatter"},"ticker":{"id":"55255","type":"BasicTicker"}},"id":"55254","type":"LinearAxis"},{"attributes":{"ticker":{"id":"55250","type":"BasicTicker"}},"id":"55253","type":"Grid"},{"attributes":{"callback":null},"id":"55243","type":"DataRange1d"},{"attributes":{},"id":"55264","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"55290","type":"PolyAnnotation"}},"id":"55263","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"55249","type":"LinearAxis"}],"center":[{"id":"55253","type":"Grid"},{"id":"55258","type":"Grid"}],"left":[{"id":"55254","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"55279","type":"GlyphRenderer"},{"id":"55281","type":"Span"}],"title":{"id":"55282","type":"Title"},"toolbar":{"id":"55267","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"55241","type":"DataRange1d"},"x_scale":{"id":"55245","type":"LinearScale"},"y_range":{"id":"55243","type":"DataRange1d"},"y_scale":{"id":"55247","type":"LinearScale"}},"id":"55240","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"55281","type":"Span"},{"attributes":{},"id":"55286","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"55290","type":"PolyAnnotation"},{"attributes":{"source":{"id":"55276","type":"ColumnDataSource"}},"id":"55280","type":"CDSView"}],"root_ids":["55297"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"58e4d81a-ce04-44f9-9919-2b8e9d04dba7","roots":{"55297":"2fcaa184-49a8-4c05-9082-24056ce00ded"}}];
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
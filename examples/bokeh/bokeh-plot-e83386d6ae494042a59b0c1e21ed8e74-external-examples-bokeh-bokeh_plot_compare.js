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
      };var element = document.getElementById("cdf47afa-b367-43e8-bc30-ccdefcf412f2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cdf47afa-b367-43e8-bc30-ccdefcf412f2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"79697a87-525b-4e67-a29d-6dc656e4696c":{"roots":{"references":[{"attributes":{},"id":"52274","type":"PanTool"},{"attributes":{"overlay":{"id":"52323","type":"BoxAnnotation"}},"id":"52275","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"52337","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"52338","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"52320","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"52290","type":"FixedTicker"}},"id":"52268","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"52313","type":"Circle"},{"attributes":{},"id":"52326","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"52307","type":"ColumnDataSource"},"glyph":{"id":"52308","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52309","type":"MultiLine"},"selection_glyph":null,"view":{"id":"52311","type":"CDSView"}},"id":"52310","type":"GlyphRenderer"},{"attributes":{},"id":"52279","type":"SaveTool"},{"attributes":{},"id":"52322","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"52309","type":"MultiLine"},{"attributes":{},"id":"52276","type":"WheelZoomTool"},{"attributes":{"source":{"id":"52307","type":"ColumnDataSource"}},"id":"52311","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"52273","type":"ResetTool"},{"id":"52274","type":"PanTool"},{"id":"52275","type":"BoxZoomTool"},{"id":"52276","type":"WheelZoomTool"},{"id":"52277","type":"LassoSelectTool"},{"id":"52278","type":"UndoTool"},{"id":"52279","type":"SaveTool"},{"id":"52280","type":"HoverTool"}]},"id":"52281","type":"Toolbar"},{"attributes":{"source":{"id":"52292","type":"ColumnDataSource"}},"id":"52296","type":"CDSView"},{"attributes":{},"id":"52269","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"52269","type":"BasicTicker"}},"id":"52272","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"52304","type":"Circle"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":-30.687290318389813},"id":"52317","type":"Span"},{"attributes":{},"id":"52331","type":"Selection"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"52303","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"52314","type":"Circle"},{"attributes":{"data_source":{"id":"52292","type":"ColumnDataSource"},"glyph":{"id":"52293","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52294","type":"Triangle"},"selection_glyph":null,"view":{"id":"52296","type":"CDSView"}},"id":"52295","type":"GlyphRenderer"},{"attributes":{"source":{"id":"52297","type":"ColumnDataSource"}},"id":"52301","type":"CDSView"},{"attributes":{"data_source":{"id":"52297","type":"ColumnDataSource"},"glyph":{"id":"52298","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52299","type":"MultiLine"},"selection_glyph":null,"view":{"id":"52301","type":"CDSView"}},"id":"52300","type":"GlyphRenderer"},{"attributes":{},"id":"52278","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"52324","type":"PolyAnnotation"}},"id":"52277","type":"LassoSelectTool"},{"attributes":{"text":""},"id":"52319","type":"Title"},{"attributes":{},"id":"52261","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"52323","type":"BoxAnnotation"},{"attributes":{},"id":"52330","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"52325","type":"Selection"},"selection_policy":{"id":"52326","type":"UnionRenderers"}},"id":"52292","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"52294","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"52324","type":"PolyAnnotation"},{"attributes":{},"id":"52334","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"52273","type":"ResetTool"},{"id":"52274","type":"PanTool"},{"id":"52275","type":"BoxZoomTool"},{"id":"52276","type":"WheelZoomTool"},{"id":"52277","type":"LassoSelectTool"},{"id":"52278","type":"UndoTool"},{"id":"52279","type":"SaveTool"},{"id":"52280","type":"HoverTool"}]},"id":"52337","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"52255","type":"DataRange1d"},{"attributes":{},"id":"52328","type":"UnionRenderers"},{"attributes":{},"id":"52329","type":"Selection"},{"attributes":{"children":[[{"id":"52254","subtype":"Figure","type":"Plot"},0,0]]},"id":"52336","type":"GridBox"},{"attributes":{"data_source":{"id":"52302","type":"ColumnDataSource"},"glyph":{"id":"52303","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52304","type":"Circle"},"selection_glyph":null,"view":{"id":"52306","type":"CDSView"}},"id":"52305","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"52264","type":"BasicTicker"}},"id":"52267","type":"Grid"},{"attributes":{},"id":"52273","type":"ResetTool"},{"attributes":{},"id":"52320","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"52338","type":"ToolbarBox"},{"id":"52336","type":"GridBox"}]},"id":"52339","type":"Column"},{"attributes":{},"id":"52327","type":"Selection"},{"attributes":{},"id":"52332","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"52299","type":"MultiLine"},{"attributes":{},"id":"52264","type":"BasicTicker"},{"attributes":{},"id":"52325","type":"Selection"},{"attributes":{"source":{"id":"52312","type":"ColumnDataSource"}},"id":"52316","type":"CDSView"},{"attributes":{},"id":"52259","type":"LinearScale"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"52293","type":"Triangle"},{"attributes":{"callback":null,"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"52333","type":"Selection"},"selection_policy":{"id":"52334","type":"UnionRenderers"}},"id":"52312","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"52257","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"xs":[[-32.014579872719835,-29.360000764059794],[-32.08085632081357,-29.539892032386533]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"52331","type":"Selection"},"selection_policy":{"id":"52332","type":"UnionRenderers"}},"id":"52307","type":"ColumnDataSource"},{"attributes":{"axis_label":"Log","formatter":{"id":"52322","type":"BasicTickFormatter"},"ticker":{"id":"52264","type":"BasicTicker"}},"id":"52263","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"52327","type":"Selection"},"selection_policy":{"id":"52328","type":"UnionRenderers"}},"id":"52297","type":"ColumnDataSource"},{"attributes":{"source":{"id":"52302","type":"ColumnDataSource"}},"id":"52306","type":"CDSView"},{"attributes":{"data_source":{"id":"52312","type":"ColumnDataSource"},"glyph":{"id":"52313","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"52314","type":"Circle"},"selection_glyph":null,"view":{"id":"52316","type":"CDSView"}},"id":"52315","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"52280","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"52329","type":"Selection"},"selection_policy":{"id":"52330","type":"UnionRenderers"}},"id":"52302","type":"ColumnDataSource"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"52290","type":"FixedTicker"},{"attributes":{},"id":"52333","type":"Selection"},{"attributes":{"below":[{"id":"52263","type":"LinearAxis"}],"center":[{"id":"52267","type":"Grid"},{"id":"52272","type":"Grid"}],"left":[{"id":"52268","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"52295","type":"GlyphRenderer"},{"id":"52300","type":"GlyphRenderer"},{"id":"52305","type":"GlyphRenderer"},{"id":"52310","type":"GlyphRenderer"},{"id":"52315","type":"GlyphRenderer"},{"id":"52317","type":"Span"}],"title":{"id":"52319","type":"Title"},"toolbar":{"id":"52281","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"52255","type":"DataRange1d"},"x_scale":{"id":"52259","type":"LinearScale"},"y_range":{"id":"52257","type":"DataRange1d"},"y_scale":{"id":"52261","type":"LinearScale"}},"id":"52254","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"52298","type":"MultiLine"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"52308","type":"MultiLine"}],"root_ids":["52339"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"79697a87-525b-4e67-a29d-6dc656e4696c","roots":{"52339":"cdf47afa-b367-43e8-bc30-ccdefcf412f2"}}];
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
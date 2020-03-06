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
      };var element = document.getElementById("52d9650a-2fed-4373-bf32-fb8e51161653");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '52d9650a-2fed-4373-bf32-fb8e51161653' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e2a47d4e-f924-4fe6-9fab-b2ebe17789e4":{"roots":{"references":[{"attributes":{"overlay":{"id":"55028","type":"BoxAnnotation"}},"id":"54982","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"55032","type":"Selection"},"selection_policy":{"id":"55033","type":"UnionRenderers"}},"id":"55002","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"54980","type":"ResetTool"},{"id":"54981","type":"PanTool"},{"id":"54982","type":"BoxZoomTool"},{"id":"54983","type":"WheelZoomTool"},{"id":"54984","type":"LassoSelectTool"},{"id":"54985","type":"UndoTool"},{"id":"54986","type":"SaveTool"},{"id":"54987","type":"HoverTool"}]},"id":"55040","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"54999","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"55030","type":"Selection"},"selection_policy":{"id":"55031","type":"UnionRenderers"}},"id":"54997","type":"ColumnDataSource"},{"attributes":{"source":{"id":"55007","type":"ColumnDataSource"}},"id":"55011","type":"CDSView"},{"attributes":{},"id":"55032","type":"Selection"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"55000","type":"GlyphRenderer"},{"id":"55005","type":"GlyphRenderer"}]},"id":"55019","type":"LegendItem"},{"attributes":{"click_policy":"hide","items":[{"id":"55019","type":"LegendItem"},{"id":"55020","type":"LegendItem"}],"location":"center_right","orientation":"horizontal"},"id":"55018","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"55029","type":"PolyAnnotation"},{"attributes":{},"id":"55037","type":"UnionRenderers"},{"attributes":{},"id":"54971","type":"BasicTicker"},{"attributes":{"text":"b"},"id":"55021","type":"Title"},{"attributes":{},"id":"55035","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"55014","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"54980","type":"ResetTool"},{"id":"54981","type":"PanTool"},{"id":"54982","type":"BoxZoomTool"},{"id":"54983","type":"WheelZoomTool"},{"id":"54984","type":"LassoSelectTool"},{"id":"54985","type":"UndoTool"},{"id":"54986","type":"SaveTool"},{"id":"54987","type":"HoverTool"}]},"id":"54988","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"55029","type":"PolyAnnotation"}},"id":"54984","type":"LassoSelectTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"55003","type":"Line"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"55008","type":"Line"},{"attributes":{},"id":"55025","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"55034","type":"Selection"},"selection_policy":{"id":"55035","type":"UnionRenderers"}},"id":"55007","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"55013","type":"Circle"},{"attributes":{},"id":"55036","type":"Selection"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"55027","type":"BasicTickFormatter"},"ticker":{"id":"54971","type":"BasicTicker"}},"id":"54970","type":"LinearAxis"},{"attributes":{},"id":"54985","type":"UndoTool"},{"attributes":{"source":{"id":"54997","type":"ColumnDataSource"}},"id":"55001","type":"CDSView"},{"attributes":{"axis_label":"ESS","formatter":{"id":"55025","type":"BasicTickFormatter"},"ticker":{"id":"54976","type":"BasicTicker"}},"id":"54975","type":"LinearAxis"},{"attributes":{},"id":"54986","type":"SaveTool"},{"attributes":{"callback":null},"id":"54964","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"55004","type":"Line"},{"attributes":{},"id":"55027","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"55015","type":"GlyphRenderer"},{"id":"55010","type":"GlyphRenderer"}]},"id":"55020","type":"LegendItem"},{"attributes":{"callback":null},"id":"54962","type":"DataRange1d"},{"attributes":{"source":{"id":"55002","type":"ColumnDataSource"}},"id":"55006","type":"CDSView"},{"attributes":{},"id":"55031","type":"UnionRenderers"},{"attributes":{},"id":"54981","type":"PanTool"},{"attributes":{},"id":"55030","type":"Selection"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"55017","type":"Span"},{"attributes":{},"id":"54968","type":"LinearScale"},{"attributes":{"toolbar":{"id":"55040","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"55041","type":"ToolbarBox"},{"attributes":{"children":[{"id":"55041","type":"ToolbarBox"},{"id":"55039","type":"GridBox"}]},"id":"55042","type":"Column"},{"attributes":{},"id":"54976","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"55009","type":"Line"},{"attributes":{"data_source":{"id":"55012","type":"ColumnDataSource"},"glyph":{"id":"55013","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55014","type":"Circle"},"selection_glyph":null,"view":{"id":"55016","type":"CDSView"}},"id":"55015","type":"GlyphRenderer"},{"attributes":{},"id":"55034","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"55028","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"55007","type":"ColumnDataSource"},"glyph":{"id":"55008","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55009","type":"Line"},"selection_glyph":null,"view":{"id":"55011","type":"CDSView"}},"id":"55010","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"54971","type":"BasicTicker"}},"id":"54974","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"54998","type":"Circle"},{"attributes":{"children":[[{"id":"54961","subtype":"Figure","type":"Plot"},0,0]]},"id":"55039","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"54976","type":"BasicTicker"}},"id":"54979","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"55036","type":"Selection"},"selection_policy":{"id":"55037","type":"UnionRenderers"}},"id":"55012","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"54997","type":"ColumnDataSource"},"glyph":{"id":"54998","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"54999","type":"Circle"},"selection_glyph":null,"view":{"id":"55001","type":"CDSView"}},"id":"55000","type":"GlyphRenderer"},{"attributes":{},"id":"55033","type":"UnionRenderers"},{"attributes":{"source":{"id":"55012","type":"ColumnDataSource"}},"id":"55016","type":"CDSView"},{"attributes":{},"id":"54983","type":"WheelZoomTool"},{"attributes":{"above":[{"id":"55018","type":"Legend"}],"below":[{"id":"54970","type":"LinearAxis"}],"center":[{"id":"54974","type":"Grid"},{"id":"54979","type":"Grid"}],"left":[{"id":"54975","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"55000","type":"GlyphRenderer"},{"id":"55005","type":"GlyphRenderer"},{"id":"55010","type":"GlyphRenderer"},{"id":"55015","type":"GlyphRenderer"},{"id":"55017","type":"Span"}],"title":{"id":"55021","type":"Title"},"toolbar":{"id":"54988","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"54962","type":"DataRange1d"},"x_scale":{"id":"54966","type":"LinearScale"},"y_range":{"id":"54964","type":"DataRange1d"},"y_scale":{"id":"54968","type":"LinearScale"}},"id":"54961","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"55002","type":"ColumnDataSource"},"glyph":{"id":"55003","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55004","type":"Line"},"selection_glyph":null,"view":{"id":"55006","type":"CDSView"}},"id":"55005","type":"GlyphRenderer"},{"attributes":{},"id":"54966","type":"LinearScale"},{"attributes":{},"id":"54980","type":"ResetTool"},{"attributes":{"callback":null},"id":"54987","type":"HoverTool"}],"root_ids":["55042"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"e2a47d4e-f924-4fe6-9fab-b2ebe17789e4","roots":{"55042":"52d9650a-2fed-4373-bf32-fb8e51161653"}}];
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
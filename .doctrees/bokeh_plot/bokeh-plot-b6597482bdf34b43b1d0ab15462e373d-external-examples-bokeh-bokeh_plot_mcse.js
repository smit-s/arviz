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
      };var element = document.getElementById("cd0ca94f-5d53-4b4e-a16d-7b485c86900f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cd0ca94f-5d53-4b4e-a16d-7b485c86900f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"57c899eb-448a-444a-8708-c6026dc436f3":{"roots":{"references":[{"attributes":{"axis_label":"Quantile","formatter":{"id":"74979","type":"BasicTickFormatter"},"ticker":{"id":"74909","type":"BasicTicker"}},"id":"74908","type":"LinearAxis"},{"attributes":{"children":[{"id":"74989","type":"ToolbarBox"},{"id":"74987","type":"GridBox"}]},"id":"74990","type":"Column"},{"attributes":{},"id":"74918","type":"ResetTool"},{"attributes":{},"id":"74909","type":"BasicTicker"},{"attributes":{"ticker":{"id":"74909","type":"BasicTicker"}},"id":"74912","type":"Grid"},{"attributes":{},"id":"74967","type":"BasicTickFormatter"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74977","type":"BasicTickFormatter"},"ticker":{"id":"74914","type":"BasicTicker"}},"id":"74913","type":"LinearAxis"},{"attributes":{},"id":"74914","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"74914","type":"BasicTicker"}},"id":"74917","type":"Grid"},{"attributes":{"overlay":{"id":"74980","type":"BoxAnnotation"}},"id":"74920","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74918","type":"ResetTool"},{"id":"74919","type":"PanTool"},{"id":"74920","type":"BoxZoomTool"},{"id":"74921","type":"WheelZoomTool"},{"id":"74922","type":"LassoSelectTool"},{"id":"74923","type":"UndoTool"},{"id":"74924","type":"SaveTool"},{"id":"74925","type":"HoverTool"}]},"id":"74926","type":"Toolbar"},{"attributes":{},"id":"74977","type":"BasicTickFormatter"},{"attributes":{},"id":"74919","type":"PanTool"},{"attributes":{"callback":null},"id":"74925","type":"HoverTool"},{"attributes":{},"id":"74924","type":"SaveTool"},{"attributes":{},"id":"74921","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74968","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"74981","type":"PolyAnnotation"}},"id":"74922","type":"LassoSelectTool"},{"attributes":{},"id":"74887","type":"UndoTool"},{"attributes":{},"id":"74923","type":"UndoTool"},{"attributes":{"source":{"id":"74935","type":"ColumnDataSource"}},"id":"74939","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74969","type":"PolyAnnotation"},{"attributes":{},"id":"74979","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"74944","type":"ColumnDataSource"}},"id":"74946","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74943","type":"Dash"},{"attributes":{"data_source":{"id":"74935","type":"ColumnDataSource"},"glyph":{"id":"74936","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74937","type":"Circle"},"selection_glyph":null,"view":{"id":"74939","type":"CDSView"}},"id":"74938","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74936","type":"Circle"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"74940","type":"Span"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74972","type":"Selection"},"selection_policy":{"id":"74973","type":"UnionRenderers"}},"id":"74944","type":"ColumnDataSource"},{"attributes":{},"id":"74873","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74982","type":"Selection"},"selection_policy":{"id":"74983","type":"UnionRenderers"}},"id":"74949","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"74941","type":"Span"},{"attributes":{"data_source":{"id":"74944","type":"ColumnDataSource"},"glyph":{"id":"74943","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74946","type":"CDSView"}},"id":"74945","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"74947","type":"Title"},{"attributes":{},"id":"74970","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74957","type":"Dash"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74980","type":"BoxAnnotation"},{"attributes":{},"id":"74971","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74942","type":"Span"},{"attributes":{"source":{"id":"74958","type":"ColumnDataSource"}},"id":"74960","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74951","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74981","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74950","type":"Circle"},{"attributes":{"overlay":{"id":"74968","type":"BoxAnnotation"}},"id":"74884","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"74863","subtype":"Figure","type":"Plot"},0,0],[{"id":"74899","subtype":"Figure","type":"Plot"},0,1]]},"id":"74987","type":"GridBox"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"74954","type":"Span"},{"attributes":{},"id":"74972","type":"Selection"},{"attributes":{"data_source":{"id":"74949","type":"ColumnDataSource"},"glyph":{"id":"74950","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74951","type":"Circle"},"selection_glyph":null,"view":{"id":"74953","type":"CDSView"}},"id":"74952","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"74878","type":"BasicTicker"}},"id":"74881","type":"Grid"},{"attributes":{},"id":"74973","type":"UnionRenderers"},{"attributes":{"source":{"id":"74949","type":"ColumnDataSource"}},"id":"74953","type":"CDSView"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74984","type":"Selection"},"selection_policy":{"id":"74985","type":"UnionRenderers"}},"id":"74958","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"74882","type":"ResetTool"},{"id":"74883","type":"PanTool"},{"id":"74884","type":"BoxZoomTool"},{"id":"74885","type":"WheelZoomTool"},{"id":"74886","type":"LassoSelectTool"},{"id":"74887","type":"UndoTool"},{"id":"74888","type":"SaveTool"},{"id":"74889","type":"HoverTool"},{"id":"74918","type":"ResetTool"},{"id":"74919","type":"PanTool"},{"id":"74920","type":"BoxZoomTool"},{"id":"74921","type":"WheelZoomTool"},{"id":"74922","type":"LassoSelectTool"},{"id":"74923","type":"UndoTool"},{"id":"74924","type":"SaveTool"},{"id":"74925","type":"HoverTool"}]},"id":"74988","type":"ProxyToolbar"},{"attributes":{},"id":"74982","type":"Selection"},{"attributes":{"ticker":{"id":"74873","type":"BasicTicker"}},"id":"74876","type":"Grid"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"74955","type":"Span"},{"attributes":{},"id":"74983","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"74958","type":"ColumnDataSource"},"glyph":{"id":"74957","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74960","type":"CDSView"}},"id":"74959","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74965","type":"BasicTickFormatter"},"ticker":{"id":"74878","type":"BasicTicker"}},"id":"74877","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"74961","type":"Title"},{"attributes":{},"id":"74904","type":"LinearScale"},{"attributes":{"callback":null},"id":"74864","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74956","type":"Span"},{"attributes":{"toolbar":{"id":"74988","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"74989","type":"ToolbarBox"},{"attributes":{},"id":"74868","type":"LinearScale"},{"attributes":{},"id":"74984","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74937","type":"Circle"},{"attributes":{},"id":"74985","type":"UnionRenderers"},{"attributes":{},"id":"74885","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"74969","type":"PolyAnnotation"}},"id":"74886","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74970","type":"Selection"},"selection_policy":{"id":"74971","type":"UnionRenderers"}},"id":"74935","type":"ColumnDataSource"},{"attributes":{},"id":"74965","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74902","type":"DataRange1d"},{"attributes":{},"id":"74888","type":"SaveTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"74967","type":"BasicTickFormatter"},"ticker":{"id":"74873","type":"BasicTicker"}},"id":"74872","type":"LinearAxis"},{"attributes":{"below":[{"id":"74872","type":"LinearAxis"}],"center":[{"id":"74876","type":"Grid"},{"id":"74881","type":"Grid"}],"left":[{"id":"74877","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74938","type":"GlyphRenderer"},{"id":"74940","type":"Span"},{"id":"74941","type":"Span"},{"id":"74942","type":"Span"},{"id":"74945","type":"GlyphRenderer"}],"title":{"id":"74947","type":"Title"},"toolbar":{"id":"74890","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74864","type":"DataRange1d"},"x_scale":{"id":"74868","type":"LinearScale"},"y_range":{"id":"74866","type":"DataRange1d"},"y_scale":{"id":"74870","type":"LinearScale"}},"id":"74863","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"74883","type":"PanTool"},{"attributes":{"below":[{"id":"74908","type":"LinearAxis"}],"center":[{"id":"74912","type":"Grid"},{"id":"74917","type":"Grid"}],"left":[{"id":"74913","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74952","type":"GlyphRenderer"},{"id":"74954","type":"Span"},{"id":"74955","type":"Span"},{"id":"74956","type":"Span"},{"id":"74959","type":"GlyphRenderer"}],"title":{"id":"74961","type":"Title"},"toolbar":{"id":"74926","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74900","type":"DataRange1d"},"x_scale":{"id":"74904","type":"LinearScale"},"y_range":{"id":"74902","type":"DataRange1d"},"y_scale":{"id":"74906","type":"LinearScale"}},"id":"74899","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"74870","type":"LinearScale"},{"attributes":{"callback":null},"id":"74900","type":"DataRange1d"},{"attributes":{},"id":"74878","type":"BasicTicker"},{"attributes":{"callback":null},"id":"74889","type":"HoverTool"},{"attributes":{},"id":"74906","type":"LinearScale"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74866","type":"DataRange1d"},{"attributes":{},"id":"74882","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74882","type":"ResetTool"},{"id":"74883","type":"PanTool"},{"id":"74884","type":"BoxZoomTool"},{"id":"74885","type":"WheelZoomTool"},{"id":"74886","type":"LassoSelectTool"},{"id":"74887","type":"UndoTool"},{"id":"74888","type":"SaveTool"},{"id":"74889","type":"HoverTool"}]},"id":"74890","type":"Toolbar"}],"root_ids":["74990"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"57c899eb-448a-444a-8708-c6026dc436f3","roots":{"74990":"cd0ca94f-5d53-4b4e-a16d-7b485c86900f"}}];
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
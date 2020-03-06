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
      };var element = document.getElementById("fa520d02-c643-45c8-a33c-bce29c94309e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fa520d02-c643-45c8-a33c-bce29c94309e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2ae433cf-7b99-4b47-a638-b126dbf87d56":{"roots":{"references":[{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"78896","type":"Span"},{"attributes":{"overlay":{"id":"78938","type":"BoxAnnotation"}},"id":"78848","type":"BoxZoomTool"},{"attributes":{"source":{"id":"78891","type":"ColumnDataSource"}},"id":"78895","type":"CDSView"},{"attributes":{},"id":"78849","type":"WheelZoomTool"},{"attributes":{},"id":"78832","type":"LinearScale"},{"attributes":{"data_source":{"id":"78869","type":"ColumnDataSource"},"glyph":{"id":"78870","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78871","type":"VBar"},"selection_glyph":null,"view":{"id":"78873","type":"CDSView"}},"id":"78872","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"78796","type":"DataRange1d"},{"attributes":{"source":{"id":"78875","type":"ColumnDataSource"}},"id":"78879","type":"CDSView"},{"attributes":{},"id":"78808","type":"BasicTicker"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"78880","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78882","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78876","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78927","type":"Selection"},"selection_policy":{"id":"78928","type":"UnionRenderers"}},"id":"78869","type":"ColumnDataSource"},{"attributes":{"source":{"id":"78869","type":"ColumnDataSource"}},"id":"78873","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78871","type":"VBar"},{"attributes":{"data_source":{"id":"78863","type":"ColumnDataSource"},"glyph":{"id":"78864","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78865","type":"VBar"},"selection_glyph":null,"view":{"id":"78867","type":"CDSView"}},"id":"78866","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"78868","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78870","type":"VBar"},{"attributes":{},"id":"78930","type":"UnionRenderers"},{"attributes":{"source":{"id":"78863","type":"ColumnDataSource"}},"id":"78867","type":"CDSView"},{"attributes":{"data_source":{"id":"78875","type":"ColumnDataSource"},"glyph":{"id":"78876","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78877","type":"VBar"},"selection_glyph":null,"view":{"id":"78879","type":"CDSView"}},"id":"78878","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"78902","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78938","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78865","type":"VBar"},{"attributes":{"data_source":{"id":"78897","type":"ColumnDataSource"},"glyph":{"id":"78898","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78899","type":"VBar"},"selection_glyph":null,"view":{"id":"78901","type":"CDSView"}},"id":"78900","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78931","type":"Selection"},"selection_policy":{"id":"78932","type":"UnionRenderers"}},"id":"78881","type":"ColumnDataSource"},{"attributes":{},"id":"78937","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78942","type":"Selection"},"selection_policy":{"id":"78943","type":"UnionRenderers"}},"id":"78897","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"78891","type":"ColumnDataSource"},"glyph":{"id":"78892","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78893","type":"VBar"},"selection_glyph":null,"view":{"id":"78895","type":"CDSView"}},"id":"78894","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78925","type":"Selection"},"selection_policy":{"id":"78926","type":"UnionRenderers"}},"id":"78863","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78944","type":"Selection"},"selection_policy":{"id":"78945","type":"UnionRenderers"}},"id":"78903","type":"ColumnDataSource"},{"attributes":{},"id":"78941","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78929","type":"Selection"},"selection_policy":{"id":"78930","type":"UnionRenderers"}},"id":"78875","type":"ColumnDataSource"},{"attributes":{},"id":"78920","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78899","type":"VBar"},{"attributes":{},"id":"78935","type":"BasicTickFormatter"},{"attributes":{},"id":"78929","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"78874","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78904","type":"VBar"},{"attributes":{},"id":"78940","type":"Selection"},{"attributes":{},"id":"78851","type":"UndoTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78877","type":"VBar"},{"attributes":{"callback":null,"overlay":{"id":"78939","type":"PolyAnnotation"}},"id":"78850","type":"LassoSelectTool"},{"attributes":{},"id":"78942","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"78842","type":"BasicTicker"}},"id":"78845","type":"Grid"},{"attributes":{},"id":"78847","type":"PanTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"78935","type":"BasicTickFormatter"},"ticker":{"id":"78915","type":"FixedTicker"}},"id":"78841","type":"LinearAxis"},{"attributes":{"source":{"id":"78897","type":"ColumnDataSource"}},"id":"78901","type":"CDSView"},{"attributes":{"below":[{"id":"78802","type":"LinearAxis"}],"center":[{"id":"78806","type":"Grid"},{"id":"78811","type":"Grid"},{"id":"78868","type":"Span"},{"id":"78874","type":"Span"},{"id":"78880","type":"Span"},{"id":"78886","type":"Span"}],"left":[{"id":"78807","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78866","type":"GlyphRenderer"},{"id":"78872","type":"GlyphRenderer"},{"id":"78878","type":"GlyphRenderer"},{"id":"78884","type":"GlyphRenderer"}],"title":{"id":"78889","type":"Title"},"toolbar":{"id":"78820","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78794","type":"DataRange1d"},"x_scale":{"id":"78798","type":"LinearScale"},"y_range":{"id":"78796","type":"DataRange1d"},"y_scale":{"id":"78800","type":"LinearScale"}},"id":"78793","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"78846","type":"ResetTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"78937","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78837","type":"BasicTicker"}},"id":"78836","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78864","type":"VBar"},{"attributes":{},"id":"78945","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"78808","type":"BasicTicker"}},"id":"78811","type":"Grid"},{"attributes":{},"id":"78931","type":"Selection"},{"attributes":{"callback":null},"id":"78794","type":"DataRange1d"},{"attributes":{},"id":"78932","type":"UnionRenderers"},{"attributes":{},"id":"78798","type":"LinearScale"},{"attributes":{"children":[{"id":"78951","type":"ToolbarBox"},{"id":"78949","type":"GridBox"}]},"id":"78952","type":"Column"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78911","type":"VBar"},{"attributes":{"source":{"id":"78909","type":"ColumnDataSource"}},"id":"78913","type":"CDSView"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"78908","type":"Span"},{"attributes":{"text":"mu"},"id":"78917","type":"Title"},{"attributes":{},"id":"78927","type":"Selection"},{"attributes":{"toolbar":{"id":"78950","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"78951","type":"ToolbarBox"},{"attributes":{},"id":"78928","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"78914","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78883","type":"VBar"},{"attributes":{},"id":"78944","type":"Selection"},{"attributes":{},"id":"78925","type":"Selection"},{"attributes":{},"id":"78926","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"78886","type":"Span"},{"attributes":{"tools":[{"id":"78812","type":"ResetTool"},{"id":"78813","type":"PanTool"},{"id":"78814","type":"BoxZoomTool"},{"id":"78815","type":"WheelZoomTool"},{"id":"78816","type":"LassoSelectTool"},{"id":"78817","type":"UndoTool"},{"id":"78818","type":"SaveTool"},{"id":"78819","type":"HoverTool"},{"id":"78846","type":"ResetTool"},{"id":"78847","type":"PanTool"},{"id":"78848","type":"BoxZoomTool"},{"id":"78849","type":"WheelZoomTool"},{"id":"78850","type":"LassoSelectTool"},{"id":"78851","type":"UndoTool"},{"id":"78852","type":"SaveTool"},{"id":"78853","type":"HoverTool"}]},"id":"78950","type":"ProxyToolbar"},{"attributes":{},"id":"78852","type":"SaveTool"},{"attributes":{},"id":"78800","type":"LinearScale"},{"attributes":{"ticker":{"id":"78837","type":"BasicTicker"}},"id":"78840","type":"Grid"},{"attributes":{"callback":null},"id":"78853","type":"HoverTool"},{"attributes":{"source":{"id":"78881","type":"ColumnDataSource"}},"id":"78885","type":"CDSView"},{"attributes":{},"id":"78943","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"78924","type":"PolyAnnotation"},{"attributes":{"ticks":[0,1,2,3]},"id":"78915","type":"FixedTicker"},{"attributes":{"text":"tau"},"id":"78889","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78846","type":"ResetTool"},{"id":"78847","type":"PanTool"},{"id":"78848","type":"BoxZoomTool"},{"id":"78849","type":"WheelZoomTool"},{"id":"78850","type":"LassoSelectTool"},{"id":"78851","type":"UndoTool"},{"id":"78852","type":"SaveTool"},{"id":"78853","type":"HoverTool"}]},"id":"78854","type":"Toolbar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78905","type":"VBar"},{"attributes":{},"id":"78817","type":"UndoTool"},{"attributes":{},"id":"78812","type":"ResetTool"},{"attributes":{},"id":"78842","type":"BasicTicker"},{"attributes":{},"id":"78813","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78812","type":"ResetTool"},{"id":"78813","type":"PanTool"},{"id":"78814","type":"BoxZoomTool"},{"id":"78815","type":"WheelZoomTool"},{"id":"78816","type":"LassoSelectTool"},{"id":"78817","type":"UndoTool"},{"id":"78818","type":"SaveTool"},{"id":"78819","type":"HoverTool"}]},"id":"78820","type":"Toolbar"},{"attributes":{"below":[{"id":"78836","type":"LinearAxis"}],"center":[{"id":"78840","type":"Grid"},{"id":"78845","type":"Grid"},{"id":"78896","type":"Span"},{"id":"78902","type":"Span"},{"id":"78908","type":"Span"},{"id":"78914","type":"Span"}],"left":[{"id":"78841","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78894","type":"GlyphRenderer"},{"id":"78900","type":"GlyphRenderer"},{"id":"78906","type":"GlyphRenderer"},{"id":"78912","type":"GlyphRenderer"}],"title":{"id":"78917","type":"Title"},"toolbar":{"id":"78854","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78794","type":"DataRange1d"},"x_scale":{"id":"78832","type":"LinearScale"},"y_range":{"id":"78796","type":"DataRange1d"},"y_scale":{"id":"78834","type":"LinearScale"}},"id":"78829","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78910","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78923","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"78939","type":"PolyAnnotation"},{"attributes":{},"id":"78818","type":"SaveTool"},{"attributes":{},"id":"78803","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78946","type":"Selection"},"selection_policy":{"id":"78947","type":"UnionRenderers"}},"id":"78909","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"78923","type":"BoxAnnotation"}},"id":"78814","type":"BoxZoomTool"},{"attributes":{"source":{"id":"78903","type":"ColumnDataSource"}},"id":"78907","type":"CDSView"},{"attributes":{},"id":"78815","type":"WheelZoomTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"78920","type":"BasicTickFormatter"},"ticker":{"id":"78887","type":"FixedTicker"}},"id":"78807","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3]},"id":"78887","type":"FixedTicker"},{"attributes":{"data_source":{"id":"78881","type":"ColumnDataSource"},"glyph":{"id":"78882","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78883","type":"VBar"},"selection_glyph":null,"view":{"id":"78885","type":"CDSView"}},"id":"78884","type":"GlyphRenderer"},{"attributes":{},"id":"78947","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"78922","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78803","type":"BasicTicker"}},"id":"78802","type":"LinearAxis"},{"attributes":{},"id":"78834","type":"LinearScale"},{"attributes":{"callback":null},"id":"78819","type":"HoverTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78898","type":"VBar"},{"attributes":{"data_source":{"id":"78903","type":"ColumnDataSource"},"glyph":{"id":"78904","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78905","type":"VBar"},"selection_glyph":null,"view":{"id":"78907","type":"CDSView"}},"id":"78906","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"78793","subtype":"Figure","type":"Plot"},0,0],[{"id":"78829","subtype":"Figure","type":"Plot"},0,1]]},"id":"78949","type":"GridBox"},{"attributes":{},"id":"78922","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"78924","type":"PolyAnnotation"}},"id":"78816","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"78909","type":"ColumnDataSource"},"glyph":{"id":"78910","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78911","type":"VBar"},"selection_glyph":null,"view":{"id":"78913","type":"CDSView"}},"id":"78912","type":"GlyphRenderer"},{"attributes":{},"id":"78946","type":"Selection"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78940","type":"Selection"},"selection_policy":{"id":"78941","type":"UnionRenderers"}},"id":"78891","type":"ColumnDataSource"},{"attributes":{},"id":"78837","type":"BasicTicker"},{"attributes":{"ticker":{"id":"78803","type":"BasicTicker"}},"id":"78806","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78892","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78893","type":"VBar"}],"root_ids":["78952"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"2ae433cf-7b99-4b47-a638-b126dbf87d56","roots":{"78952":"fa520d02-c643-45c8-a33c-bce29c94309e"}}];
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
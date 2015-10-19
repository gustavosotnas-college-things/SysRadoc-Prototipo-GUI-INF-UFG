(function(window, undefined) {
  var dictionary = {
    "1a75ab75-7774-4c29-a5c8-98382d9bb4a6": "Recuperação_Cadastro SysRadoc - D",
    "7762c87c-e294-4acc-b473-775656e6d44e": "Página inicial INF - D_original",
    "24007360-52e3-49dd-875b-cbf133d1ce01": "Sucesso_Recuperação_Cadastro SysRadoc - D",
    "4113fefa-69cb-4517-8009-826faeeb998a": "Sucesso_Cadastro SysRadoc - D",
    "d4c4a8c5-4598-4db6-8e20-3823d7f561df": "Cadastro SysRadoc - D",
    "b83cda5c-53b8-4f6f-b3ae-0eccbb12aedf": "Página inicial SysRadoc - D",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
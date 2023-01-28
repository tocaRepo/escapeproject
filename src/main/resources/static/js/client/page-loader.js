
let templateCache = {};
async function loadHtmlPage(path) {
    $('#pg-content').load(path, function () {
        console.log("home loaded");
    });
}


async function loadHbsTemplate(HbsPath, htmlId, handlebarData) {
    if (templateCache[HbsPath]) {
        // If the template is already in the cache, use it
        $("#" + htmlId).html(templateCache[HbsPath](handlebarData));
    } else {
        $.get(HbsPath, function (data) {
            var template = Handlebars.compile(htmlDecode(data));
            templateCache[HbsPath] = template;
            $("#" + htmlId).html(templateCache[HbsPath](handlebarData));
        }, 'html')
    }
}
const codeArea = ace.edit("codeArea")
codeArea.setTheme("ace/theme/chrome");
codeArea.session.setMode("ace/mode/javascript");
codeArea.setFontSize(14);
codeArea.setReadOnly(false);

document.getElementById("formatBtn").addEventListener("click", function () {
    codeArea.session.setValue(js_beautify(codeArea.getValue()));
})
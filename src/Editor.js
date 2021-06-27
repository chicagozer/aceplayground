import AceEditor from "react-ace";
import React from "react";
//language_tools语言工具，（这个好像是检测语法，有点忘了，想不起来从哪里找到的）
// import "brace/ext/language_tools";
// import "brace/snippets/javascript";
//searchbox过滤框，快捷键ctrl+F
// import "brace/ext/searchbox";
//一下import的是编辑器支持的语法，我的项目都用到了，所以全部导入
import "brace/mode/javascript"; //
// import "brace/mode/jsx";
//以下import的是风格，还有好多种，可以根据自己需求导入
// github、tomorrow、kuioir、twilight、xcode、textmeta、terminal、solarized-light、solarized-dark
import "brace/theme/monokai"; //
import "./ExtTern";
import "./WorkerTern";
// eslint-disable-next-line import/no-webpack-loader-syntax
import demo from "!raw-loader!./DemoJS.js";

export default class Editor extends React.Component {
  onBeforeLoad = ace => {
    // var langTools = ace.acequire("ace/ext/language_tools");
    // langTools.addCompleter({
    //     getCompletions: function(editor, session, pos, prefix, callback) {
    //         console.log(editor, session, pos, prefix, callback);
    //         if (prefix.length === 0) { callback(null, []); return }
    //         callback(null, [{
    //             name: '奖金', //显示的名称，‘奖金’
    //             value: 'xiaojian', //插入的值，‘100’
    //             score: 1000, //分数，越大的排在越上面
    //             meta: 'xiaojian' //描述，‘我的常量’
    //         }]);
    //     }
    // });
  };

  onLoad = editor => {
    // return;
    editor.setOptions({
      /**
       * Either `true` or `false` or to enable with custom options pass object that
       * has options for tern server: http://ternjs.net/doc/manual.html#server_api
       * If `true`, then default options will be used
       */
      enableTern: {
        /* http://ternjs.net/doc/manual.html#option_defs */
        defs: ["browser", "ecma5", "ecma6", "react", "lodash", "backstage"],
        /* http://ternjs.net/doc/manual.html#plugins */
        plugins: {
          doc_comment: {
            fullDocs: true
          }
        },
        useWorker: false,
        switchToDoc: function(name, start) {
          console.log(
            "switchToDoc called but not defined. name=" + name + "; start=",
            start
          );
        },
        startedCb: function() {
          //once tern is enabled, it can be accessed via editor.ternServer
          console.log("editor.ternServer:", editor.ternServer);
        }
      },
      enableSnippets: true,
      enableBasicAutocompletion: true
    });
  };

  render() {
    return (
      <AceEditor
        ref={r => (this.editor = r)}
        mode="javascript"
        // mode={this.state.mode}
        // readOnly={this.state.readOnly}
        theme="monokai"
        name="app_code_editor"
        // onChange={this.onChange}
        fontSize={14}
        width={900}
        height={1000}
        showPrintMargin
        showGutter
        // useWorker
        highlightActiveLine //突出活动线
        enableSnippets //启用代码段
        defaultValue={demo}
        onLoad={this.onLoad}
        onBeforeLoad={this.onBeforeLoad}
        // value={this.state.editorContent}
        // style={{ width: "100%", height: this.state.deskHeight, minHeight: 600 }}
        // commands={[
        //   {
        //     //命令是键绑定数组。
        //     name: "saveFile", //键绑定的名称。
        //     bindKey: { win: "Ctrl-S", mac: "Command-S" }, //用于命令的组合键。
        //     exec: () => {
        //       if (!this.state.changed) {
        //         // message.warning("文件未改动");
        //       } else {
        //         //保存文件操作
        //       }
        //     } //重新绑定命令的名称
        //   }
        // ]}
        setOptions={{
          enableBasicAutocompletion: true, //启用基本自动完成功能
          enableLiveAutocompletion: true, //启用实时自动完成功能 （比如：智能代码提示）
          enableSnippets: true, //启用代码段
          showLineNumbers: true,
          tabSize: 4
        }}
      />
    );
  }
}

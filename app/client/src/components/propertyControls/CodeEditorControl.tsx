import React, { ChangeEvent } from "react";
import BaseControl, { ControlProps } from "./BaseControl";
import CodeEditor from "components/editorComponents/CodeEditor";
import { EventOrValueHandler } from "redux-form";
import {
  EditorModes,
  EditorSize,
  TabBehaviour,
} from "components/editorComponents/CodeEditor/EditorConfig";

class CodeEditorControl extends BaseControl<ControlProps> {
  render() {
    const {
      dataT,
      dataTreePath,
      evaluatedValue,
      expected,
      isValid,
      propertyValue,
      useValidationMessage,
      validationMessage,
    } = this.props;
    const props: Partial<ControlProps> = {};

    // Input1.text

    // List1.templateInput1.text
    if (dataTreePath) props.dataTreePath = `${dataTreePrefix}${dataTrePath}`;
    if (evaluatedValue) props.evaluatedValue = evaluatedValue;
    if (expected) props.expected = expected;

    return (
      <CodeEditor
        input={{ value: propertyValue, onChange: this.onChange }}
        meta={{
          error: isValid ? "" : validationMessage,
          touched: true,
        }}
        mode={EditorModes.TEXT_WITH_BINDING}
        size={EditorSize.EXTENDED}
        tabBehaviour={TabBehaviour.INDENT}
        theme={this.props.theme}
        useValidationMessage={useValidationMessage}
        {...props}
      />
    );
  }

  onChange: EventOrValueHandler<ChangeEvent<any>> = (
    value: string | ChangeEvent,
  ) => {
    this.updateProperty(this.props.propertyName, value);
  };

  static getControlType() {
    return "CODE_EDITOR";
  }
}

export default CodeEditorControl;

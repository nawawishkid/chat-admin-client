import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import defaultFieldSchemes from "~/src/data/form-schemes/settings-account";
import SchemebasedForm from "~/src/components/SchemebasedForm";

class SettingsAccountContainer extends React.Component {
  state = {
    isCancel: false
  };

  handleCancel = () => this.setState({ isCancel: true });

  render() {
    if (this.state.isCancel) {
      return <Redirect to="/admin/templates" />;
    }

    return (
      <SchemebasedForm
        handleCancel={this.handleCancel}
        defaultFieldSchemes={defaultFieldSchemes}
        {...this.props}
      />
    );
  }
}

SettingsAccountContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  doc: PropTypes.object // Object of templateInput scheme document from database.
};

export { SettingsAccountContainer };

export default SettingsAccountContainer;

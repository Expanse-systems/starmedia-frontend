import * as React from 'react';
import {graphql} from 'react-apollo';
import {SendFeedbackMutation} from "../apollo/query/SendFeedbackMutation";
import FileUpload from './FileUpload/FileUpload';
import  {compose} from 'recompose';


const hokCompose = compose(
  graphql(SendFeedbackMutation, {
    name: 'SendFeedback'
  }),
  FileUpload,
)

const SendFeedbackFormHoc: any = (WrapperComponent: any) =>

  hokCompose(class extends React.Component<any, any> {


    onSubmit = async (values: any) => {
      console.log(values);

      const {uploadFile, SendFeedback, callBack} = this.props;
      let file: any = null;
      if (typeof values.avatar === 'object' && values.avatar.file) {
        file = await uploadFile(typeof values.avatar === 'object' && values.avatar.file);
      }


      const result = await SendFeedback({
        variables: {
          feedback: {
            file: file && file.file_data && file.file_data.id,
            email: values.email,
            phone: values.email,
            form: values.form,
            date: new Date().toISOString(),
          }
        }
      });
      console.log('result: ', result);

      if(callBack){
        callBack()
      }
    };

    render() {
      return (
        <WrapperComponent
          {
            ...this.props
          }
          onSubmit={this.onSubmit}
        />
      );
    };
  })

export default SendFeedbackFormHoc;
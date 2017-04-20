import WxRecorder from './WxRecorder';

let wxRecorder;

module.exports = {
  init: config => {
    wxRecorder = new WxRecorder(config);
  },
  startRecord: config => {
    wxRecorder.startRecord(config);
  },
  stopRecord: () => {
    return wxRecorder.stopAndRate();
  },
  reupload: config => {
    wxRecorder.reupload(config);
  }
};

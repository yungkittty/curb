import { translate } from "react-i18next";

const withTranslation = () => component =>
  translate(props => props.namespace)(component);

export default withTranslation;

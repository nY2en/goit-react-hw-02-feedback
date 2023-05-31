import PropTypes from 'prop-types';
import Btn from 'components/FeebackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <Btn key={Math.random()} onClick={onLeaveFeedback}>
      {el}
    </Btn>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

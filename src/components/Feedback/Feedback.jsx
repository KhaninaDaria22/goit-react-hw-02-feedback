import { Component } from 'react';
import { FeedbackList, Button } from './Feedback.styled';


class Feedback extends Component {
    render() {
        const { options, onFeedback} = this.props;
        return (
            <FeedbackList> 
                {options.map((option, index) => {
                    return (
                        <li key={index}>
                          <Button
                            type="button"
                            onClick={() => {
                                onFeedback(option);
                            }}
                          >
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Button>
                        </li>
                      );
                    })}
                  </FeedbackList>
                );
              }
            }

export default Feedback;
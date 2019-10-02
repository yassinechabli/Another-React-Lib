import React from 'react';

const RadioContext = React.createContext();

export const Radio = (props) => {
    
        const { name, selectedValue, onChange } = React.useContext(RadioContext);;
        const optional = {};
        if (selectedValue !== undefined) {
            optional.checked = (props.value === selectedValue);
        }
        if (typeof onChange === 'function') {
            optional.onChange = onChange.bind(null, props.value);
        }
        return (
            <div > 
                <input
                    {...props}
                    role="radio"
                    aria-checked={optional.checked}
                    type="radio"
                    name={name}
                    {...optional} />
                    <label>{props.value}</label>
            </div>
        );
};


export class RadioGroup extends React.Component {
    getContext() {
        const {name, selectedValue, onChange} = this.props;
        return  {
            name, selectedValue, onChange
          }
      }
        render() {
            const { name, selectedValue, onChange, children, ...rest } = this.props;
            return (<form role="radiogroup" {...rest}>
                <RadioContext.Provider value={this.getContext}>
                    {children}
                </RadioContext.Provider>
            </form>);
        }

    };


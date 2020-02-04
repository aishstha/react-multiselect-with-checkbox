#react-multiselect-with-checkbox
![](https://static.nexxt.in/usr/55e31b40-dd2b-4d93-928b-4c6e4541db02_d99a5ef1-cc0e-4e6f-877f-a737efa678ba_Screen%20Shot%202020-02-04%20at%204.13.18%20PM.png)

## Install

```bash
npm install --save react-multiselect-with-checkbox
```

## Usage

```jsx
import React, { Component } from "react";
import MultipleSelect from "react-multiple-select-dropdown";
import "react-multiple-select-dropdown/dist/index.css";

class YourWrapperComponent extends React.Component {
    state = {
        selectedOptions: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption),
        );
    };

    render() {
        const options = [
            { value: "sunday", label: "Sunday" },
            { value: "monday", label: "Monday" },
            { value: "tuesday", label: "Tuesday" },
            { value: "wenesday", label: "Wenesday" },
            { value: "thursday", label: "Thursday" },
            { value: "friday", label: "Friday" },
            { value: "saturday", label: "Saturday" },
        ];
        const { selectedOption } = this.state;
        return (
            <div>
                <MultiSelect
                    options={options}
                    value={selectedOption}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
```

feel free to report bugs and request feature

## License

MIT © [aishwarya4shrestha](https://github.com/aishwarya4shrestha)

let h1 = <h1>Hello World!</h1>
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                {h1}
                {h1}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);
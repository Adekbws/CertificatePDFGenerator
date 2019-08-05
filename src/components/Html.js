import React from 'react';
import PropTypes from 'prop-types';


class Html extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.object,
    scripts: PropTypes.array
  }

  render () {
    const { children, initialState, scripts } = this.props;
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>React Generator PDF</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href={initialState.cssPaths.loader}
          />
          <link
            rel="stylesheet"
            href={initialState.cssPaths.fonts}
          />
        </head>
        <body>

          <div id="app"
               dangerouslySetInnerHTML={{ __html: children }}
          ></div>
          {initialState && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.APP_STATE=${JSON.stringify(initialState)}`
              }}
            ></script>
          )}
          {scripts.map((item, index) => {
            return <script key={index} src={item}></script>;
          })}
        </body>
      </html>
    );
  }
}

export default Html;

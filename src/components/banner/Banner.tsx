import React from 'react';

import './Banner.scss';

export default class Banner extends React.Component<IBannerProps, IBannerState> {
  constructor(props: IBannerProps) {
    super(props);

    this.state = {
      title: this.props.title,
    };
  }

  render() {
    return (
      <div className="banner-wrapper text-fields" style={{ paddingTop: '30px' }}>
        <p className="mt-2 high-light">{this.state.title}</p>
      </div>
    );
  }
}

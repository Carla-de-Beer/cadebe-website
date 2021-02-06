import React from 'react';

import './Banner.scss';

export default class Banner extends React.Component<IBannerProps, IBannerState> {
  constructor(props: IBannerProps) {
    super(props);

    const { title } = this.props;

    this.state = {
      title,
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div className="banner-wrapper text-fields" style={{ paddingTop: '30px' }}>
        <p className="mt-2 high-light">{ title }</p>
      </div>
    );
  }
}

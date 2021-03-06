import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from '@edx/paragon';

const IconLink = props => (
  <NavLink
    className="btn btn-link btn-block text-left text-secondary rounded-0"
    to={props.to}
  >
    <Icon
      className={[classNames([
        'fa',
        props.iconClassName,
        {
          'mr-2': props.isExpanded,
        },
      ])]}
      screenReaderText={!props.isExpanded && props.title}
    />
    {props.isExpanded && props.title}
  </NavLink>
);

IconLink.defaultProps = {
  iconClassName: null,
  isExpanded: false,
};

IconLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
  isExpanded: PropTypes.bool,
};

export default IconLink;

import PropTypes from 'prop-types';
import React from 'react';
import RepeatableButton from 'app/components/RepeatableButton';
import Space from 'app/components/Space';
import controller from 'app/lib/controller';
import DigitalReadout from './DigitalReadout';
import styles from './index.styl';

const Overrides = (props) => {
  const { ovF, ovS, ovT } = props;

  if (!ovF && !ovS && !ovT) {
    return null;
  }

  return (
    <div className={styles.overrides}>
      {!!ovF && (
        <DigitalReadout label="F" value={ovF + '%'}>
          <RepeatableButton
            onClick={() => {
              controller.command('override:feed', -10);
            }}
          >
            <i className="fa fa-arrow-down" style={{ fontSize: 14 }} />
            <span style={{ marginLeft: 5 }}>
              -10%
            </span>
          </RepeatableButton>
          <RepeatableButton
            onClick={() => {
              controller.command('override:feed', -1);
            }}
          >
            <i className="fa fa-arrow-down" style={{ fontSize: 10 }} />
            <span style={{ marginLeft: 5 }}>
              -1%
            </span>
          </RepeatableButton>
          <RepeatableButton
            onClick={() => {
              controller.command('override:feed', 1);
            }}
          >
            <i className="fa fa-arrow-up" style={{ fontSize: 10 }} />
            <span style={{ marginLeft: 5 }}>
              1%
            </span>
          </RepeatableButton>
          <RepeatableButton
            onClick={() => {
              controller.command('override:feed', 10);
            }}
          >
            <i className="fa fa-arrow-up" style={{ fontSize: 14 }} />
            <span style={{ marginLeft: 5 }}>
              10%
            </span>
          </RepeatableButton>
          <button
            type="button"
            className="btn btn-default"
            style={{ padding: 5 }}
            onClick={() => {
              controller.command('override:feed', 0);
            }}
          >
            <i className="fa fa-undo fa-fw" />
          </button>
        </DigitalReadout>
      )}
      {!!ovS && (
        <DigitalReadout label="S" value={ovS + '%'}>
          <RepeatableButton
            onClick={() => {
              controller.command('override:spindle', -10);
            }}
          >
            <i className="fa fa-arrow-down" style={{ fontSize: 14 }} />
            <span style={{ marginLeft: 5 }}>
              -10%
            </span>
          </RepeatableButton>
          <RepeatableButton
            onClick={() => {
              controller.command('override:spindle', -1);
            }}
          >
            <i className="fa fa-arrow-down" style={{ fontSize: 10 }} />
            <span style={{ marginLeft: 5 }}>
              -1%
            </span>
          </RepeatableButton>
          <RepeatableButton
            onClick={() => {
              controller.command('override:spindle', 1);
            }}
          >
            <i className="fa fa-arrow-up" style={{ fontSize: 10 }} />
            <span style={{ marginLeft: 5 }}>
              1%
            </span>
          </RepeatableButton>
          <RepeatableButton
            onClick={() => {
              controller.command('override:spindle', 10);
            }}
          >
            <i className="fa fa-arrow-up" style={{ fontSize: 14 }} />
            <span style={{ marginLeft: 5 }}>
              10%
            </span>
          </RepeatableButton>
          <button
            type="button"
            className="btn btn-default"
            style={{ padding: 5 }}
            onClick={() => {
              controller.command('override:spindle', 0);
            }}
          >
            <i className="fa fa-fw fa-undo" />
          </button>
        </DigitalReadout>
      )}
      {!!ovT && (
        <DigitalReadout label="T" value={ovT + '%'}>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              controller.command('override:rapid', 100);
            }}
          >
            <i className="fa fa-battery-full" />
            <Space width={8} />
            100%
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              controller.command('override:rapid', 50);
            }}
          >
            <i className="fa fa-battery-half" />
            <Space width={8} />
            50%
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              controller.command('override:rapid', 25);
            }}
          >
            <i className="fa fa-battery-quarter" />
            <Space width={8} />
            25%
          </button>
        </DigitalReadout>
      )}
    </div>
  );
};

Overrides.propTypes = {
  ovF: PropTypes.number,
  ovS: PropTypes.number,
  ovT: PropTypes.number
};

export default Overrides;

import cn from 'classnames';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {
  CircularProgressbarWithSummaryProps,
  CircularProgressbarWithSummaryColor,
} from './CircularProgressbarWithSummary.type';

import './CircularProgressbarWithSummary.scss';
import { JSX } from 'react';

export function CircularProgressbarWithSummary({
  className,
  percentage,
  from,
  to,
  summary,
  description,
}: CircularProgressbarWithSummaryProps): JSX.Element {
  return (
    <div className={cn('circular_progressbar_with_summary', className)}>
      <div className="circular_progressbar_with_summary--progress_bar">
        <CircularProgressbarWithChildren
          value={percentage}
          circleRatio={0.7}
          strokeWidth={8}
          styles={buildStyles({
            rotation: 0.65,
            pathColor:
              percentage > 95
                ? CircularProgressbarWithSummaryColor.MAX
                : CircularProgressbarWithSummaryColor.MIN,
            trailColor: CircularProgressbarWithSummaryColor.BACKGROUND,
          })}
        >
          {summary}
          <div className="circular_progressbar_with_summary--title">
            {description}
          </div>
        </CircularProgressbarWithChildren>
        <div className="circular_progressbar_with_summary--bottom">
          <div className="circular_progressbar_with_summary--value">{from}</div>
          <div className="circular_progressbar_with_summary--value circular_progressbar_with_summary--value-to">
            {to}
          </div>
        </div>
      </div>
    </div>
  );
}

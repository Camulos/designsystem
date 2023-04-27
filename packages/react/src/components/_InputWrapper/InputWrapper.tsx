import React, { useId } from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import { useUsingKeyboard } from '../../hooks/useUsingKeyboard';

import type { ReadOnlyVariant_, InputVariant_ } from './utils';
import { getVariant } from './utils';
import { Icon } from './Icon';
import classes from './InputWrapper.module.css';

type InputRendererProps = {
  className: string;
  hasIcon: boolean;
  inputId: string;
  variant: InputVariant_;
};

export interface InputWrapperProps {
  disabled?: boolean;
  inputId?: string;
  inputRenderer: (props: InputRendererProps) => ReactNode;
  isSearch?: boolean;
  isValid?: boolean;
  label?: string;
  noFocusEffect?: boolean;
  noPadding?: boolean;
  readOnly?: boolean | ReadOnlyVariant_;
}

export const InputWrapper = ({
  disabled = false,
  inputId,
  inputRenderer,
  isSearch = false,
  isValid = true,
  label,
  noFocusEffect,
  noPadding,
  readOnly = false,
}: InputWrapperProps) => {
  const randomInputId = useId();
  const givenOrRandomInputId = inputId ?? randomInputId;
  const usingKeyboard = useUsingKeyboard();

  const { variant, iconVariant } = getVariant({
    disabled,
    isSearch,
    isValid,
    readOnly,
  });
  const hasIcon = iconVariant !== 'none';

  return (
    <span
      className={cn(
        classes.inputAndLabel,
        hasIcon && classes.withIcon,
        usingKeyboard && classes.usingKeyboard,
      )}
    >
      {label && (
        <label
          className={classes.label}
          htmlFor={givenOrRandomInputId}
        >
          {label}
        </label>
      )}
      <span
        data-testid='InputWrapper'
        className={cn(classes.inputWrapper, classes[variant], {
          [classes.search]: isSearch,
          [classes.withFocusEffect]: !noFocusEffect,
          [classes.withPadding]: !noPadding,
        })}
      >
        <Icon
          variant={iconVariant}
          disabled={disabled}
        />
        {inputRenderer({
          className: classes.field,
          hasIcon,
          inputId: givenOrRandomInputId,
          variant,
        })}
      </span>
    </span>
  );
};

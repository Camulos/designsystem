import type { ForwardedRef, ChangeEvent } from 'react';
import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import type {
  NumericFormatProps,
  PatternFormatProps,
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import { NumericFormat, PatternFormat } from 'react-number-format';

import { isNumericFormat, isPatternFormat } from '../../utils';
import { InputWrapper } from '../_InputWrapper';
import type { ReadOnlyVariant_, CharacterLimit } from '../_InputWrapper';

export type TextFieldProps = {
  /**
   *  The characterLimit function calculates remaining characters.
   *  Provide a `label` function that takes count as parameter and returns a message.
   *  Use `srLabel` to describe `maxCount` for screen readers.
   */
  characterLimit?: CharacterLimit;
  /** The default value for the text field. */
  defaultValue?: string | number;
  /** The formatting options for the text field. */
  formatting?: TextFieldFormatting;
  /** Specifies whether the value of the text field is valid. */
  isValid?: boolean;
  /** The label for the text field. */
  label?: string;
  /** Whether the text field is read-only. */
  readOnly?: boolean | ReadOnlyVariant_;
  /** The value of the text field. */
  value?: string;
  /** Specifies whether the text field is disabled. */
  disabled?: boolean;
  /** Specifies whether the text field is required. */
  required?: boolean;
} & Omit<
  NumericFormatProps | PatternFormatProps,
  'readOnly' | 'value' | 'defaultValue'
>;

export type TextFieldFormatting = {
  align?: 'right' | 'center' | 'left';
  number?: NumericFormatProps | PatternFormatProps;
};

type ReplaceTargetValueWithUnformattedValueProps = {
  sourceInfo: SourceInfo;
  values: NumberFormatValues;
};

const replaceTargetValueWithUnformattedValue = ({
  values,
  sourceInfo,
}: ReplaceTargetValueWithUnformattedValueProps): React.ChangeEvent<HTMLInputElement> => {
  const copiedEvent = {
    ...sourceInfo.event,
  } as React.ChangeEvent<HTMLInputElement>;

  return {
    ...copiedEvent,
    target: {
      ...copiedEvent.target,
      value: values.value.trim(),
    },
  };
};
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      onChange,
      isValid = true,
      disabled = false,
      readOnly = false,
      required = false,
      formatting,
      label,
      value,
      characterLimit,
      'aria-describedby': ariaDescribedBy,
      ...rest
    }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [currentValue, setCurrentValue] = useState<string>(
      value ? value.toString() : '',
    );

    const handleNumberFormatChange = (
      values: NumberFormatValues,
      sourceInfo: SourceInfo,
    ): void => {
      if (sourceInfo.source === 'event' && onChange) {
        const parsedEvent = replaceTargetValueWithUnformattedValue({
          values,
          sourceInfo,
        });
        setCurrentValue(parsedEvent.target.value);
        onChange(parsedEvent);
      }
    };

    const handleNativeInputChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      if (onChange) {
        onChange(event);
      }
      setCurrentValue(event.target.value || '');
    };

    return (
      <InputWrapper
        value={currentValue}
        isValid={isValid}
        disabled={disabled}
        readOnly={readOnly}
        label={label}
        inputId={id}
        characterLimit={characterLimit}
        ariaDescribedBy={ariaDescribedBy}
        inputRenderer={({ className, variant, inputId, describedBy }) => {
          const commonProps = {
            id: inputId,
            readOnly: Boolean(readOnly),
            disabled,
            required,
            className: cn(className, rest.className),
            style: {
              textAlign: formatting?.align,
              ...rest.style,
            },
          };

          if (formatting?.number && isNumericFormat(formatting.number)) {
            // Prefix starting with '-' causes problems, add a leading space
            if (
              formatting.number.prefix &&
              formatting.number.prefix[0] === '-'
            ) {
              formatting.number.prefix = ` ${formatting.number.prefix}`;
            }

            return (
              <NumericFormat
                {...commonProps}
                {...formatting.number}
                {...rest}
                value={value}
                data-testid={`${inputId}-formatted-number-${variant}`}
                onValueChange={handleNumberFormatChange}
                valueIsNumericString={true}
                aria-describedby={describedBy}
                getInputRef={ref}
              />
            );
          } else if (formatting?.number && isPatternFormat(formatting.number)) {
            return (
              <PatternFormat
                {...commonProps}
                {...formatting.number}
                {...rest}
                value={value}
                data-testid={`${inputId}-formatted-number-${variant}`}
                onValueChange={handleNumberFormatChange}
                valueIsNumericString={true}
                aria-describedby={describedBy}
                getInputRef={ref}
              />
            );
          } else {
            return (
              <input
                {...commonProps}
                {...rest}
                value={value}
                data-testid={`${inputId}-${variant}`}
                onChange={handleNativeInputChange}
                aria-describedby={describedBy}
                ref={ref}
              />
            );
          }
        }}
      />
    );
  },
);

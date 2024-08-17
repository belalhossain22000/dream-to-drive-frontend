import React, { useState, useEffect, useMemo } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict, Range } from "react-date-range";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

interface DateAndTimePickerProps {
  setStartDateTime: (startDateTime: Date) => void; // Rename the prop here
  onEndDateTimeChange?: (endDateTime: Date) => void; // Callback for endDateTime
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
  setStartDateTime, // Use the renamed prop here
  onEndDateTimeChange,
}) => {
  const [selectionRange, setSelectionRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const getCurrentTime = (): string => {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const ampm = now.getHours() >= 12 ? "PM" : "AM";
        return `${hours}:${minutes} ${ampm}`;
      };

      setSelectedTime(getCurrentTime());
    }
  }, [isMounted]);

  useEffect(() => {
    // Whenever the start date or selected time changes, call setStartDateTime
    if (selectionRange.startDate && selectedTime) {
      const [hoursString, minutesString] = selectedTime.split(":");
      const date = new Date(selectionRange.startDate);

      // Parse AM/PM
      const isPM = selectedTime.includes("PM");
      let hours = parseInt(hoursString);
      if (isPM && hours !== 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;

      date.setHours(hours);
      date.setMinutes(parseInt(minutesString.split(" ")[0]));

      setStartDateTime(date);
    }
  }, [selectionRange.startDate, selectedTime, setStartDateTime]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    if (selection.startDate && selection.endDate) {
      setSelectionRange({
        startDate: selection.startDate,
        endDate: selection.endDate,
        key: selection.key,
      });
    }
  };

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
  };

  const endDateTime = useMemo(() => {
    if (selectionRange.endDate && selectedTime) {
      const [hoursString, minutesString] = selectedTime.split(":");
      const date = new Date(selectionRange.endDate);

      // Parse AM/PM
      const isPM = selectedTime.includes("PM");
      let hours = parseInt(hoursString);
      if (isPM && hours !== 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;

      date.setHours(hours);
      date.setMinutes(parseInt(minutesString.split(" ")[0]));

      return date;
    }
    return null;
  }, [selectionRange.endDate, selectedTime]);

  useEffect(() => {
    if (endDateTime && onEndDateTimeChange) {
      onEndDateTimeChange(endDateTime);
    }
  }, [endDateTime, onEndDateTimeChange]);

  const minDate = new Date(); // Current date

  return (
    <div>
      {isMounted && (
        <>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            editableDateInputs={true}
            months={2}
            direction="horizontal"
            minDate={minDate}
            className="w-full"
          />
          <div className="text-white mt-5">
            <label htmlFor="time-picker">Select Time:</label>
            <TimePicker
              id="time-picker"
              onChange={handleTimeChange}
              value={selectedTime}
              disableClock={true}
              clearIcon={null}
              format="hh:mm a"
            />
            <p>Selected Time: {selectedTime}</p>
            <p>Start DateTime: {selectionRange.startDate?.toString()}</p>
            <p>End DateTime: {endDateTime?.toString()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DateAndTimePicker;

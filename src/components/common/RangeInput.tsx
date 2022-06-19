import styles from "./rangeInput.module.css";

interface Props {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
  name?: string;
}

export default ({ onChange, prefix, suffix, name }: Props) => {
  return (
    <div className={styles.outerWrapper}>
      <label htmlFor={name}>{name}</label>
      <div className={styles.innerWrapper}>
        {prefix && <label htmlFor={name}>{prefix}</label>}
        <input
          defaultValue={5}
          max={10}
          min={0}
          type="range"
          {...{ onChange, name }}
        />
        {suffix && <label htmlFor={name}>{suffix}</label>}
      </div>
    </div>
  );
};

import classNames from 'classnames';
import styles from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export function Icon(props: IconProps) {
    const {className, Svg, ...delegeted} = props;
    return (
        <Svg
            className={classNames(styles.Icon, [className])}
            {...delegeted}
        />
    )
}
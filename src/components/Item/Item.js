  
import React from 'react';
import classname from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

const Item = ({value, isDone, index, onClickDone, id}) => (
    <label
        htmlFor={`checkbox[${index}]`}
        onClick={() => onClickDone(id)}
        className={
            classname({
                [styles.item]: true,
                [styles.done]: isDone,
            })}>
        {value}
    </label>);

Item.defaultProps = {
    value: 'Тут должно быть задание',
    isDone: false
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
};

export default Item;
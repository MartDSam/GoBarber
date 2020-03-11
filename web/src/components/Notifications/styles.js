import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
    position: relative;
`;

export const Badge = styled.button`
    background-color: transparent;
    border: 0px;
    position: relative;

    ${props =>
        props.hasUnread &&
        css`
            &::after {
                content: '';
                position: absolute;
                right: 0px;
                top: 0px;
                width: 8px;
                height: 8px;
                background-color: #ff892e;
                border-radius: 50%;
            }
        `}
`;

export const NotificationList = styled.div`
    position: absolute;
    width: 260px;
    top: calc(100% + 30px);
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: rgba(0, 0, 0, 0.6);
    border: 0px;
    border-radius: 4px;
    padding: 15px 5px;
    display: ${props => (props.visible ? 'block' : 'none')};

    &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 50%;
        width: 0px;
        height: 0px;
        border: 20px solid transparent;
        border-bottom-color: rgba(0, 0, 0, 0.6);
        transform: translate(-50%, -100%);
    }
`;

export const Scroll = styled(PerfectScrollbar)`
    max-height: 260px;
    padding: 5px 15px;
`;

export const Notification = styled.div`
    color: #fff;

    &:not(:first-of-type) {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    p {
        font-size: 13px;
        line-height: 18px;
    }

    time {
        display: block;
        font-size: 12px;
        opacity: 0.6;
        margin-bottom: 5px;
    }

    button {
        font-size: 12px;
        border: 0px;
        background-color: transparent;
        color: ${lighten(0.2, '#7159c1')};
    }

    ${props =>
        props.unread &&
        css`
            &::after {
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                background-color: #ff892e;
                border-radius: 50%;
                margin-left: 10px;
            }
        `}
`;

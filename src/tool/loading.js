
import {Spin,Message} from 'iview'

export const loadinginfoshow = (text,time) => {
    Spin.show({
        render: (h) => {
            return h('div', [
                h('Icon', {
                    'class': 'demo-spin-icon-load',
                    props: {
                        type: 'ios-loading',
                        size: 18
                    }
                }),
                h('div', text)
            ])
        }
    });
    setTimeout(() => {
        Spin.hide();
    }, time);
}

export function messageErrorShow(text,time) {
    Message.error({
        content: text,
        duration: time//单位秒
    });
}

export function messageSuccessShow(text,time) {
    Message.success({
        content: text,
        duration: time//单位秒
    });
}

/*export function loadinginfoshow(text,time) {
    Spin.show({
        render: (h) => {
            return h('div', [
                h('Icon', {
                    'class': 'demo-spin-icon-load',
                    props: {
                        type: 'ios-loading',
                        size: 18
                    }
                }),
                h('div', text)
            ])
        }
    });
    setTimeout(() => {
        Spin.hide();
    }, time);
}*/

import moment from 'moment';

export function formatDateByYear(date) {
    return moment(date).format('YYYY');
}
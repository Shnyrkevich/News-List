import { TPost } from '../store/reducers/postsReducer';

export function dateFix(data: TPost[]) {
  const currentDate = new Date().toString().split(' ').slice(1, 5);

  return data.map((el: TPost) => {
    let date = el.date.split(' ').slice(1, 5);
    let outputDate = '';
    if (date[0] === currentDate[0] &&
        date[2] === currentDate[2] &&
        date[1] === currentDate[1]) {
      outputDate = `today at ${date[3].split(':').slice(0, 2).join(':')}`;
    } else if (date[0] === currentDate[0] && 
      date[2] === currentDate[2] &&
      (Number(currentDate[1]) - Number(date[1]) === 1)) {
      outputDate = `yesterday at ${date[3].split(':').slice(0, 2).join(':')}`;
    } else {
      outputDate = `on the ${date[1]} ${date[0]} ${date[2]}`;
    }
    return {
      ...el,
      date: outputDate
    };
  })
}


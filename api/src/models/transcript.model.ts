import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Transcript extends Entity {
  @property({
    type: 'number',
    id: true,
    description: 'Идентификатор имени'
  })
  id: number;

  @property({
    type: 'string',
    description: 'Название файла'
  })
  fileName: string | null;

  @property({
    type: 'string',
    description: 'Расширение файла'
  })
  fileNameExt: string | null;

  @property({
    type: 'string',
    description: 'Расшифровка текста'
  })
  text: string | null;

  @property({
    type: 'object',
    description: 'Сырые данные по расшифровке'
  })
  rawData: object | null;

  @property({
    type: 'array',
    description: 'Разбивка по времени'
  })
  timeIntervals: object[] | null;

  constructor(data?: Partial<Transcript>) {
    super(data);
  }
}

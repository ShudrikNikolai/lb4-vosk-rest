import {inject} from '@loopback/core'
import {DefaultCrudRepository} from '@loopback/repository'
import {VoskDataSource} from '../datasources';
import {Transcript} from '../models';
import config from '../config';

export class TranscriptRepository extends DefaultCrudRepository<
  Transcript,
  typeof Transcript.prototype.id
> {
  constructor(
    @inject(`datasource.${config.DATABASE.MONGO_DATABASE}`) dataSource: VoskDataSource,
  ) {
    super(Transcript, dataSource);
  }
}

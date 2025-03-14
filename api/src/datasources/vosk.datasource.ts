import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import config from '../config'

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class VoskDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = config.DATABASE.MONGO_DATABASE;
  static readonly defaultConfig = config.DATABASE;

  constructor(
    @inject(`datasources.config.${config.DATABASE.MONGO_DATABASE}`, {optional: true})
      dsConfig: object = config) {
    super(dsConfig);
  }
}

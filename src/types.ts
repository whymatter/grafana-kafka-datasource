import { DataQuery, DataSourceJsonData } from '@grafana/data';

export enum AutoOffsetReset {
  EARLIEST = 'earliest',
  LATEST = 'latest',
}

export enum TimestampMode {
  Now = 'now',
  Message = 'message',
}

export type AutoOffsetResetInterface = {
  [key in AutoOffsetReset]: string;
};

export type TimestampModeInterface = {
  [key in TimestampMode]: string;
};

export interface KafkaDataSourceOptions extends DataSourceJsonData {
  bootstrapServers: string;
}

export interface KafkaSecureJsonData {
  apiKey?: string;
}

export interface KafkaQuery extends DataQuery {
  topicName: string;
  partition: number;
  withStreaming: boolean;
  autoOffsetReset: AutoOffsetReset;
  timestampMode: TimestampMode;
  fields: string;
}

export const defaultQuery: Partial<KafkaQuery> = {
  partition: 0,
  withStreaming: true,
  autoOffsetReset: AutoOffsetReset.LATEST,
  timestampMode: TimestampMode.Now,
};

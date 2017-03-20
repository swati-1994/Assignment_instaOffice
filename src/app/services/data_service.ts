/**
 * Created by swati on 19/3/17.
 */
import {Injectable} from '@angular/core';
import {data} from '../mock_data/mock_data';
import {dataType} from '../data_type/data_type'

@Injectable()
export class dummyDataService{
  getData():Promise<dataType>{
    return Promise.resolve(data);
  }
}

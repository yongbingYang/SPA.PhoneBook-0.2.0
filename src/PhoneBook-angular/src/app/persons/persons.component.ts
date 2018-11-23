import { Component, OnInit, Injector } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { PersonListDto, PersonServiceProxy, PagedResultDtoOfPersonListDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent extends PagedListingComponentBase<PersonListDto> implements OnInit {


filter='';
people:PersonListDto[] = [];


  constructor(
    injector:Injector,
    private _personService:PersonServiceProxy
  ) { 
    super(injector);
  }

  ngOnInit() {
  }


  protected list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
      
    
    this._personService.getPagedPersons(this.filter,'Id',request.maxResultCount,request.skipCount).finally(()=>{
      finishedCallback();
    }).subscribe((result:PagedResultDtoOfPersonListDto)=>{

    })
  }
  protected delete(entity: PersonListDto): void {
    throw new Error("Method not implemented.");
  }

}

using Abp.Application.Services;
using LibraryApp.Authors.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace LibraryApp.Authors
{
    public interface IAuthorAppService : IApplicationService
    {
        [HttpGet]
        IEnumerable<GetAuthorOutput> ListAll();

        [HttpPost]
        Task Create(CreateAuthorInput input);

        [HttpPut]
        void Update(UpdateAuthorInput input);

        [HttpDelete]
        void Delete(DeleteAuthorInput input);

        [HttpGet]
        GetAuthorOutput GetAuthorById(GetAuthorInput input);
    }
}

using Abp.Application.Services;
using Abp.Authorization;
using LibraryApp.Authorization;
using LibraryApp.Authors.DTO;
using LibraryApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Authors
{
    [AbpAuthorize(PermissionNames.Pages_Users)]
    public class AuthorAppService : LibraryAppAppServiceBase, IAuthorAppService
    {
        private readonly IAuthorManager _authorManager;

        public AuthorAppService(IAuthorManager authorManager)
        {
            _authorManager = authorManager;
        }

        public async Task Create(CreateAuthorInput input)
        {
            Author output = ObjectMapper.Map<Author>(input);
            await _authorManager.Create(output);
        }

        public void Delete(DeleteAuthorInput input)
        {
            _authorManager.Delete(input.Id);
        }

        public GetAuthorOutput GetAuthorById(GetAuthorInput input)
        {
            var getAuthor = _authorManager.GetAuthorById(input.Id);
            var output = ObjectMapper.Map<GetAuthorOutput>(getAuthor);
            return output;
        }

        public IEnumerable<GetAuthorOutput> ListAll()
        {
            var getAll = _authorManager.GetAllList();
            var output = ObjectMapper.Map<List<GetAuthorOutput>>(getAll);
            return output;
        }

        public void Update(UpdateAuthorInput input)
        {
            Author output = ObjectMapper.Map<Author>(input);
            _authorManager.Update(output);
        }
    }
}

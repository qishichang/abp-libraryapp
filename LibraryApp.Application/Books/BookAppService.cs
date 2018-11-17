using Abp.Application.Services;
using Abp.Authorization;
using LibraryApp.Authorization;
using LibraryApp.Books.DTO;
using LibraryApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryApp.Books
{
    [AbpAuthorize(PermissionNames.Pages_Users)]
    public class BookAppService : LibraryAppAppServiceBase, IBookAppService
    {
        private readonly IBookManager _bookManager;

        public BookAppService(IBookManager bookManager)
        {
            _bookManager = bookManager;
        }
        public async Task Create(CreateBookInput input)
        {
            Book output = ObjectMapper.Map<Book>(input);
            await _bookManager.Create(output);
        }

        public void Delete(DeleteBookInput input)
        {
            _bookManager.Delete(input.Id);
        }

        public GetBookOutput GetBookById(GetBookInput input)
        {
            var getBook = _bookManager.GetBookById(input.Id);
            var output = ObjectMapper.Map<GetBookOutput>(getBook);
            return output;
        }

        public IEnumerable<GetBookOutput> ListAll()
        {
            var getAll = _bookManager.GetAllList();
            var output = ObjectMapper.Map<List<GetBookOutput>>(getAll);
            return output;
        }

        public void Update(UpdateBookInput input)
        {
            var output = ObjectMapper.Map<Book>(input);
            _bookManager.Update(output);
        }
    }
}

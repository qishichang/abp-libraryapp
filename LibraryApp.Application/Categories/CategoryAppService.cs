using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LibraryApp.Categories.DTO;
using LibraryApp.Models;

namespace LibraryApp.Categories
{
    public class CategoryAppService : LibraryAppAppServiceBase, ICategoryAppService
    {
        private readonly ICategoryManager _categoryManager;

        public CategoryAppService(ICategoryManager categoryManager)
        {
            _categoryManager = categoryManager;
        }
        public async Task Create(CreateCategoryInput input)
        {
            var output = ObjectMapper.Map<Category>(input);
            await _categoryManager.Create(output);
        }

        public void Delete(DeleteCategoryInput input)
        {
            _categoryManager.Delete(input.Id);
        }

        public GetCategoryOutput GetCategoryById(GetCategoryInput input)
        {
            var getCategory = _categoryManager.GetCategoryById(input.Id);
            var output = ObjectMapper.Map<GetCategoryOutput>(getCategory);
            return output;
        }

        public IEnumerable<GetCategoryOutput> ListAll()
        {
            var getAll = _categoryManager.GetAllList();
            var output = ObjectMapper.Map<List<GetCategoryOutput>>(getAll);
            return output;
        }

        public void Update(UpdateCategoryInput input)
        {
            var output = ObjectMapper.Map<Category>(input);
            _categoryManager.Update(output);
        }
    }
}
